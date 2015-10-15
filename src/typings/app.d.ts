/*
 * Include types from npm
 */

/// <reference path="../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

/*
 * Project models
 */
interface User{
  name: String;
}

interface UserStat{
  user: User
  stats: {
    created: Number,
    declined: Number
  }
}
