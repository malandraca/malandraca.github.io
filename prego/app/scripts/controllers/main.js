'use strict';
/*global $:false */
/**
 * @ngdoc function
 * @name pregoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pregoApp
 */
angular.module('pregoneraApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.player = {
        volume:50,
        playing: false
    }
    
    $scope.player.volume=50;
    $scope.$watch('player.volume', function() {
        console.log($scope.player.volume);
    });
    
    
    $scope.play = function(){
        alert('lalala');
    };
  });
