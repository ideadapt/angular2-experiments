/// <reference path="./typings/app.d.ts" />
import {Component, View, OnInit, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {UserStatService, userStatsServiceInjectables as _serviceInjectables} from './user-stat-service';

@Component({
    selector: 'user-stats'
})
@View({
    directives: [CORE_DIRECTIVES],
    template: `
        <table>
          <tr *ng-for="#user of data">
            <td>{{user.user.name}}</td>
            <td>{{user.stats.created}}</td>
            <td>{{user.stats.declined}}</td>
          </tr>
        </table>
    `
})
export class UserStats implements OnInit {

  constructor(private userStatsService: UserStatService){
  }

  onInit(): void{
    this.userStatsService.getStats();
  }
}

export var userStatsServiceInjectables = _serviceInjectables;
