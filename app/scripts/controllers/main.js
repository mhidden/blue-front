'use strict';

angular.module('blueticketFrontApp')
  .controller('MainCtrl', function ($scope, $localStorage) {
  	$scope.storage = $localStorage;
  });
