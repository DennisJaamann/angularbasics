(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name contactModule
   * @description
   * # contactModule
   *
   * Contact module of the application.
   */
  angular.module('contact', []).config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactController'
      });
  });
})();
