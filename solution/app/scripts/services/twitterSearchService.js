(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name angularbasicsApp.twitterSearchService
   * @description
   * # twitterSearchService
   * Service in the angularbasicsApp.
   */
  angular.module('solutionApp')
    .service('twitterSearchService', function twitterSearchService($log,$resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      var twitterSearchResource = $resource('https://twitter.com/search?q=:searchTerm');

      this.searchTweets = function (searchTerm) {
        $log.log('Fetching all tweets for ' + searchTerm);
        return twitterSearchResource.get({searchTerm: searchTerm}).$promise;
      };
    });
})();
