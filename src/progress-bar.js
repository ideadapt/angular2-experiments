import {ComponentAnnotation as Component, ViewAnnotation as View, ElementRef, onChange} from 'angular2/angular2';
import {DOM} from 'angular2/src/dom/dom_adapter';

@Component({
    selector: 'progress-bar',
    properties: [
    	'percentage'
    ],
    lifecycle: [onChange]
})
@View({
    template: `
    	<div class="all">
    		<div class="progress"></div>
    		<span class="label">{{percentage}}</span>
    	</div>
    `
})
export class ProgressBar {
    percentage: number = 23;
    constructor(element:ElementRef){
    	this.progressElement = DOM.querySelector(element.nativeElement, '.progress');
    }
    onChange(changes){
    	if(changes['percentage']){
    		DOM.setAttribute(this.progressElement, "style", `width: ${this.percentage}%`);
    	}
    }
}
