/// <reference path="./typings/app.d.ts" />
import {Component, View, ElementRef, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';
import {ProgressBar} from './progress-bar';

@Component({
    selector: 'demo-app'
})
@View({
    directives: [ProgressBar, FORM_DIRECTIVES],
    template: `
        <form>
            <input [(ng-model)]="percentageVal" />
        </form>

        <progress-bar [percentage]="percentageVal">Loading...</progress-bar>
    `
})
export class DemoApp {
    percentageVal: number = 29;
}

bootstrap(DemoApp);
