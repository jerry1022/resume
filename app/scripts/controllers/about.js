'use strict';

/**
 * @ngdoc function
 * @name App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the App
 */
angular.module('App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
