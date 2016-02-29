'use strict';

angular.module('blueticketFrontApp')
  .controller('EventCtrl', function ($scope, $routeParams, eventsService) {
  	$scope.event = {};
    $scope.ticketBought = "";

  	var updateEvent = function (response) {
  		$scope.event = response.data
  	};

  	var errorHandler = function (response) {
  		console.log(response);
  	};

    var ticketPurchased = function (response) {
      $scope.ticketBought = "Ticket comprado - Seu identificador é: " + response.data.id;
    }

    $scope.buy = function () {
      eventsService.buy($scope.event.id, ticketPurchased, errorHandler);
    }

  	eventsService.get($routeParams.id, updateEvent, errorHandler);
  });
