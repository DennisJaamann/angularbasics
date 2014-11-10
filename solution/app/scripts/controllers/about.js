'use strict';

/**
 * @ngdoc function
 * @name solutionApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the solutionApp
 */
angular.module('solutionApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
