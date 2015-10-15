/// <reference path="./typings/app.d.ts" />
import {Component, View, ElementRef, OnChanges, NgStyle, SimpleChange} from 'angular2/angular2';

@Component({
    selector: 'progress-bar',
    properties: [
    	'percentage'
    ]
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
export class ProgressBar implements OnChanges {
    percentage: number = 23;
    progressElement: any;
    onChanges(changes: {[propName: string]: SimpleChange}){
      let percentage = changes['percentage'];
    	console.log(percentage);
    }
}
