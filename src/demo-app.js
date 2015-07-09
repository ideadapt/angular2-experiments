import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, formDirectives} from 'angular2/angular2';
import {ProgressBar} from 'progress-bar';

@Component({
    selector: 'demo-app'
})
@View({
    directives: [ProgressBar, formDirectives],
    template: `
        <form>
            <input [(ng-model)]="percentageVal" />
        </form>

        <progress-bar [percentage]="percentageVal">Loading...</progress-bar>
    `
})
export class DemoApp {
    percentageVal: number = 20;
}

bootstrap(DemoApp);
