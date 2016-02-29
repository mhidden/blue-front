angular.
module('blueticketFrontApp').
factory('eventsService', function($localStorage, $http) {
  service = {}

  service.list = function (filters, successCallback, errorCallback) {
    $http({
      method:'GET',
      url:'http://localhost:3000/v1/events',
      data: filters
    }).then(successCallback, errorCallback);
  };
   
  service.get = function (id, successCallback, errorCallback) {
		$http({
      method:'GET',
      url:'http://localhost:3000/v1/events/' + id
    }).then(successCallback, errorCallback);
  };

  service.buy = function (id, successCallback, errorCallback) {
    var data = {'event_id': id, 'user_id': $localStorage.id };
    $http({
      method:'POST',
      url:'http://localhost:3000/v1/tickets',
      data: data
    }).then(successCallback, errorCallback);
  }

  return service
 });