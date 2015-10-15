/// <reference path="./typings/app.d.ts" />

import {Injectable, bind} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';

@Injectable()
export class UserStatService {
  data: Array<UserStat>;
  http: Http;

  constructor(http: Http){
    this.http = http;
    this.data = [{
      user:{
        name: 'Ueli'
      },
      stats:{
        created: 10,
        declined: 2
      }
    }];
  }

  getStats(){
    return this.http.request('api/com').subscribe((res: any)=> {console.log(res);});
  }
}

export var userStatsServiceInjectables: Array<any> = [
  bind(UserStatService).toClass(UserStatService)
];
