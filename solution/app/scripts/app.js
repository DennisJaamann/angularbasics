(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name solutionApp
   * @description
   * # solutionApp
   *
   * Main module of the application.
   */
  angular
    .module('solutionApp', [
      'ngResource',
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/tweetsOverview.html',
          controller: 'TweetsOverviewController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/contact',{
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
