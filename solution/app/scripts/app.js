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
        .when('/tweetDetail/:id',{
          templateUrl:'views/tweetDetail.html',
          controller:'TweetDetailController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutController'
        })
        .when('/contact',{
          templateUrl: 'views/contact.html',
          controller: 'ContactController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
