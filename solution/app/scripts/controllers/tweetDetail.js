(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name solutionApp.controller:TweetDetailController
   * @description
   * # TweetDetailController
   * Controller of the solutionApp
   */
  angular.module('solutionApp')
    .controller('TweetDetailController', function ($scope,$log,id, TwitterSearchService) {
      $scope.tweet = TwitterSearchService.searchTweetById(id);

      $log.log('Tweet ' + $scope.tweet);
    });
})();
