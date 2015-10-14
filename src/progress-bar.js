import {ComponentAnnotation as Component, ViewAnnotation as View, ElementRef, onChange, NgStyle} from 'angular2/angular2';
import {DOM} from 'angular2/src/dom/dom_adapter';

@Component({
    selector: 'progress-bar',
    properties: [
    	'percentage'
    ],
    lifecycle: [onChange]
})
@View({
    directives: [NgStyle],
    template: `
    	<div class="all">
    		<div class="progress" [ng-style]="{'width': percentage +'%'}"></div>
            <div class="progress" [style.width]="percentage +'%'"></div>
            <div class="progress manual"></div>
    		<span class="label">{{percentage}}</span>
    	</div>
    `
})
export class ProgressBar {
    percentage: number = 23;
    constructor(element:ElementRef){
    	this.progressElement = DOM.querySelector(element.nativeElement, '.progress.manual');
    }
    onChange(changes){
    	if(changes['percentage']){
    		DOM.setAttribute(this.progressElement, "style", `width: ${Number(this.percentage)}%`);
    	}
    }
}
