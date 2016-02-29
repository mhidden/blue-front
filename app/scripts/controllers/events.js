'use strict';

angular.module('blueticketFrontApp')
  .controller('EventsCtrl', function ($scope, $location, eventsService) {
  	$scope.events = [];

  	this.updateEventsList = function (response) {
  		$scope.events = response.data
  	};

  	this.errorHandler = function (response) {
  		console.log(response);
  	};

  	$scope.openEvent = function (id) {
  		$location.path('/events/' + id);
  	};

  	eventsService.list({}, this.updateEventsList, this.errorHandler);
  });
