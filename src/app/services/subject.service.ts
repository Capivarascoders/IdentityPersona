import { Subject } from 'rxjs';

export class SubjectService {
    private emitEvent: Subject<any> = new Subject();
    onEvent = this.emitEvent.asObservable();

    dispatchEvent(data) {
        this.emitEvent.next(data);
    }
}