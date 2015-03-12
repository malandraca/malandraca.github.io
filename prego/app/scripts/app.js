'use strict';

/**
 * @ngdoc overview
 * @name pregoApp
 * @description
 * # pregoApp
 *
 * Main module of the application.
 */
angular
  .module('pregoneraApp', ['ngRoute'])

  .value('soundManager', soundManager)

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
         
         // the soundPlayer service
.factory('soundPlayer', [
    'soundManager', function (soundManager) {
 
        return {
            // the method play gets a relative/absolute sound file url to play
            play: function (url) {
                soundManager.setup({
                    // set debugMode to 'false' for less verbose
                    debugMode: true,
                    url: 'REPLACE_WITH_YOUR_SWF_PATH',
                    onready: function () {
                        var mySound = soundManager.createSound({
                            url: url
                        });
                        mySound.play();
                    },
                    // some error handling
                    ontimeout: function () {
                        // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
                    }
                });
            }
        }
    }
]);
