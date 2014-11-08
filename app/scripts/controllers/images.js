'use strict';
/**
 * @ngdoc function
 * @name imageraterApp.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('imageraterApp')
  .controller('ImagesCtrl', function ($scope, fbutil, $timeout) {
    // synchronize a read-only, synchronized array of images, limit to most recent 10
    $scope.images = fbutil.syncArray('images', {limit: 10});

    
  });