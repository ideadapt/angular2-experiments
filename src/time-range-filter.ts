/// <reference path="./typings/app.d.ts" />
import {Component, View, ElementRef, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';


@Component({
    selector: 'time-range-filter'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        filter form here!
    `
})
export class TimeRangeFilter {
    
}
