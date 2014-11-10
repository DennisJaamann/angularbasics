(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name solutionApp.controller:TweetsOverviewController
   * @description
   * # TweetsOverviewController
   * Controller of the solutionApp
   */
  angular.module('solutionApp')
    .controller('TweetsOverviewController', function ($scope,$log, TwitterSearchService) {
      $scope.tweets = TwitterSearchService.searchTweets('Ordina Belgium');

      $log.log('Number of tweets: ' + $scope.tweets.length);
    });
})();
