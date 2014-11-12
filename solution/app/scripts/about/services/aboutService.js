(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name aboutModule.services.AboutService
   * @description
   * # AboutService
   * Service in the about module.
   */
  angular.module('about')
    .service('AboutService', function aboutService($q,$log) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var title='Some about stuff';
      var content = 'Wow such stuff, much stuffness';

      this.fetchAbout=function(){
        $log.log('Fetching about');
        var deferred = $q.defer();
        deferred.resolve({title:title,content:content});
        return deferred.promise;
      }
    });
})();
