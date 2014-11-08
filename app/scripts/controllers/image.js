'use strict';
/**
 * @ngdoc function
 * @name imageraterApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('imageraterApp')
  .controller('ImageCtrl', function ($scope, fbutil, $timeout) {

    $scope.upVoteImage = function() {
    	debugger;
    	$scope.image.upVotes++;
    	$scope.images.$save($scope.image);
    };
    
  });