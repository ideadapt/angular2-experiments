/// <reference path="./typings/app.d.ts" />
import {Component, View, FORM_DIRECTIVES, Input, EventEmitter} from 'angular2/angular2';

interface IFilter{
  username: String;
}

export class Filter extends EventEmitter implements IFilter {
  constructor(public username: String){
    super();
  }
}

@Component({
    selector: 'time-range-filter'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
      <input type="text" placeholder="from, e.g. 1 Oct 14" name="fromDate" />
      <input type="text" placeholder="to, e.g. 1 Sep" name="toDate" />
      <input type="text" placeholder="username, e.g. sabrina" name="username" (keyup)="usernameChanged($event)" />
    `
})
export class TimeRangeFilter {

  @Input() filter: Filter;

  usernameChanged(ev: any){
    this.filter.username = ev.target.value;
    this.filter.next(this.filter);
  }
}
