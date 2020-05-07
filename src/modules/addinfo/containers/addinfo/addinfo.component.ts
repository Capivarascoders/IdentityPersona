import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-addinfo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './addinfo.component.html',
    styleUrls: ['addinfo.component.scss'],
})
export class ChartsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
