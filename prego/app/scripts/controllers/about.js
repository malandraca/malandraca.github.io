'use strict';

/**
 * @ngdoc function
 * @name pregoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pregoApp
 */
angular.module('pregoneraApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
