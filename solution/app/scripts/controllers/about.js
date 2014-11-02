'use strict';

/**
 * @ngdoc function
 * @name solutionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the solutionApp
 */
angular.module('solutionApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
