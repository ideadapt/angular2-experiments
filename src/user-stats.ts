/// <reference path="./typings/app.d.ts" />
import {Component, View, OnInit, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {UserStatService, userStatsServiceInjectables as _serviceInjectables} from './user-stat-service';
import {Filter} from './time-range-filter';

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
  @Input() filter: Filter;
  data: Array<UserStat>;
  database: Array<UserStat>;

  constructor(private userStatsService: UserStatService){
  }

  onInit(): void{
    this.data = this.database = this.userStatsService.getStats();
    this.filter.toRx().subscribe((newFilter) => {
      console.log('filter by:', newFilter.username);
      this.data = this.database.filter((user) => {
        return user.user.name.indexOf(newFilter.username) !== -1;
      });
    });
  }
}

export var userStatsInjectables = _serviceInjectables;
