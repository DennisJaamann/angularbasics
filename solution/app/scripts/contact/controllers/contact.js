(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name contactModule.controllers:ContactController
   * @description
   * # ContactController
   * Controller of the contact module
   */
  angular.module('contact')
    .controller('ContactController', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
})();
