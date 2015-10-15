/// <reference path="./typings/app.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
import {UserStats, userStatsServiceInjectables} from './user-stats';
import {PrList} from './pr-list';
import {TimeRangeFilter} from './time-range-filter';

@Component({
    selector: 'app'
})
@View({
    directives: [UserStats, PrList, TimeRangeFilter],
    template: `
        <time-range-filter></time-range-filter>
        <user-stats></user-stats>
        <pr-list></pr-list>
    `
})
class App {
}

bootstrap(App, [HTTP_BINDINGS, userStatsServiceInjectables]);
