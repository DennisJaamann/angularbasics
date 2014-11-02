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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
