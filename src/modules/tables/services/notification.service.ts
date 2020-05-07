import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { NOTIF } from '@modules/tables/data/notification';
import { SortDirection } from '@modules/tables/directives';
import { Notifications } from '@modules/tables/models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
    notification: Notifications[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: SortDirection;
}

function compare(v1: number | string, v2: number | string) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(notification: Notifications[], column: string, direction: string): Notifications[] {
    if (direction === '') {
        return notification;
    } else {
        return [...notification].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}

function matches(notifications: Notifications, term: string, pipe: PipeTransform) {
    return (
        notifications.company.toLowerCase().includes(term.toLowerCase()) ||
        pipe.transform(notifications.information).includes(term) ||
        pipe.transform(notifications.value).includes(term) ||
        pipe.transform(notifications.negative).includes(term) ||
        pipe.transform(notifications.permission).includes(term)
    );
}

@Injectable({ providedIn: 'root' })
export class NotificationsService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _notification$ = new BehaviorSubject<Notifications[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 4,
        searchTerm: '',
        sortColumn: '',
        sortDirection: '',
    };

    constructor(private pipe: DecimalPipe) {
        this._search$
            .pipe(
                tap(() => this._loading$.next(true)),
                debounceTime(120),
                switchMap(() => this._search()),
                delay(120),
                tap(() => this._loading$.next(false))
            )
            .subscribe(result => {
                this._notification$.next(result.notification);
                this._total$.next(result.total);
            });

        this._search$.next();
    }

    get countries$() {
        return this._notification$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    set page(page: number) {
        this._set({ page });
    }
    get pageSize() {
        return this._state.pageSize;
    }
    set pageSize(pageSize: number) {
        this._set({ pageSize });
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    set searchTerm(searchTerm: string) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn: string) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection: SortDirection) {
        this._set({ sortDirection });
    }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchResult> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

        // 1. sort
        let notification = sort(NOTIF, sortColumn, sortDirection);

        // 2. filter
        notification = notification.filter(notifications => matches(notifications, searchTerm, this.pipe));
        const total = notification.length;

        // 3. paginate
        notification = notification.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ notification, total });
    }
}
