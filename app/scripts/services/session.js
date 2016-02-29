angular.
module('blueticketFrontApp').
factory('sessionService', function($http) {
  service = {}

  service.signup = function (data, successCallback, errorCallback) {
    $http({
      method:'POST',
      url:'http://localhost:3000/v1/users',
      data: data
    }).then(successCallback, errorCallback);
  };

  return service;
 });