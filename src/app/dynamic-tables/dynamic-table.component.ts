import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicTable, EditItem } from './';
import { DynamicRowComponent } from './dynamic-row'
import { DynamicRowEditComponent } from './dynamic-row-edit';


@Component({
  selector: 'dynamic-table',
  template: require('./dynamic-table.component.html'),
  styles: [require('./dynamic-table.component.scss')],
  directives: [DynamicRowComponent, DynamicRowEditComponent],
  providers: []
})
export class DynamicTableComponent implements OnInit {
  @Input() theme;
  @Input() editable: boolean = false;
  private editSession: boolean = false;
  private keys: any[]; // column names
  private collection: any[][] = []; // array of row values

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  setData(data) {
    // only assumption is data contains id field
    // TODO add id check
    this.keys = Object.keys(data[0]).filter(key => key !== 'id');
    
    if (this.editable === true) {
      this.collection = data.map(item => new EditItem(item));
    }
    else {
      this.collection = data
    }
  }
}