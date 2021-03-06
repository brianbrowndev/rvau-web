import { Component, Input } from '@angular/core';

@Component({
    selector: 'static-table',
    template: require('./static-table.component.html'),
    styles: [require('./static-table.component.scss')],

})
export class StaticTableComponent {

    @Input() columnNames: string[]; // pretty column names
    @Input() keys: string[]; // raw column names to format row order
    @Input() rows: {}[];

    constructor() { }

}
