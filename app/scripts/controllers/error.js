'use strict';

angular.module('blueticketFrontApp')
  .controller('ErrorCtrl', function ($rootScope, $scope, sessionService) {
    $scope.errorMessage = "";

    $rootScope.$on('$locationChangeStart', function(event, next, previous) {
      if (next != previous) {
        $scope.errorMessage = "";  
      }
    });

    $rootScope.$on('ERROR_CLEAN', function () {
      $scope.errorMessage = "";
    });

    $rootScope.$on('ERROR_UPDATE', function (b, errors) {
      var messages = [];
      for (var e in errors.data) {
        messages.push(errors.data[e]);
      }
      $scope.errorMessage = messages.join("<br />\r\n");
    });
  });
