"use strict";angular.module("malandracaSiteApp",["ngRoute","ngAnimate","ui.bootstrap-slider"]).value("soundManager",soundManager).constant("STREAM_URL","http://radio.pregonera.net:6366/1/;").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/radio",{templateUrl:"views/radio.html",controller:"RadioCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("malandracaSiteApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("malandracaSiteApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("malandracaSiteApp").controller("RadioCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("malandracaSiteApp").controller("FooterCtrl",["$scope","soundPlayer",function(a,b){a.player={volume:50,playing:!1},a.$watch("player.volume",function(){b.setVolume(a.player.volume)}),a.play=function(){b.play(),a.player.playing=b.isPlaying()},a.stop=function(){b.stop(),a.player.playing=!1},a.play()}]),angular.module("malandracaSiteApp").directive("footer",function(){return{restrict:"A",templateUrl:"views/footer.html",scope:!0,transclude:!1,controller:"FooterCtrl"}}),angular.module("malandracaSiteApp").factory("soundPlayer",["soundManager","STREAM_URL",function(a,b){var c,d=50,e="malandracaRadioStream",f={play:function(){a.ok()&&null!=c&&0==c.playState&&c.play()},getVolume:function(){return d},setVolume:function(b){if(a.ok()&&null!=c){b>100&&(b=100),0>b&&(b=0);try{c.setVolume(b)}catch(e){}}d=b},stop:function(){a.unload(e),f.createSound(),a.stopAll()},createSound:function(){c=a.createSound({id:e,url:b,autoPlay:!1,stream:!0,autoLoad:!0,volume:50})},isPlaying:function(){return null!=c?1==c.playState:!1}};try{a.setup({debugMode:!0,url:"REPLACE_WITH_YOUR_SWF_PATH",useHighPerformance:!0,preferFlash:!0,useFastPolling:!0,onready:function(){f.createSound()},ontimeout:function(){}})}catch(g){console.log("Cannot instanciate sound manager")}return f}]);