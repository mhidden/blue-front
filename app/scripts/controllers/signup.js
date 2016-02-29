'use strict';

angular.module('blueticketFrontApp')
  .controller('SignupCtrl', function ($rootScope, $scope, $location, $localStorage, sessionService) {
    $scope.signup = {};

    var userCreated = function (response) {
      $localStorage.token = response.data['token'];
      $localStorage.admin = response.data['admin'];
      $localStorage.cpf = response.data['cpf'];
      $localStorage.id = response.data['id'];
      $location.path('/events/');
    };

    var errorHandler = function (response) {
      console.log(response);
    };

    $scope.signUp = function () {
      sessionService.signup($scope.signup, userCreated, errorHandler);
    }
  });
