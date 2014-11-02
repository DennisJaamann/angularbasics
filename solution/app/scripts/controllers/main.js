'use strict';

/**
 * @ngdoc function
 * @name solutionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the solutionApp
 */
angular.module('solutionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
