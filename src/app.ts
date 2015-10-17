/// <reference path="./typings/app.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {UserStats, userStatsInjectables} from './user-stats';
import {PrList} from './pr-list';
import {TimeRangeFilter, Filter} from './time-range-filter';


@Component({
    selector: 'app'
})
@View({
    directives: [UserStats, PrList, TimeRangeFilter],
    template: `
        <time-range-filter [filter]="filter"></time-range-filter>
        <user-stats [filter]="filter"></user-stats>
        <pr-list></pr-list>
    `
})
class App {
  filter: Filter;
  constructor(){
    this.filter = new Filter('');
  }
}

bootstrap(App, [HTTP_BINDINGS, userStatsInjectables]);
