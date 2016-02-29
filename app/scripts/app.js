'use strict';

/**
 * @ngdoc overview
 * @name blueticketFrontApp
 * @description
 * # blueticketFrontApp
 *
 * Main module of the application.
 */
angular
  .module('blueticketFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signupController'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'eventsController'
      })
      .when('/events/:id', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        controllerAs: 'eventController'
      })
      .when('/404/', {
        templateUrl : 'views/404.html'
      })
      .otherwise({
        redirectTo: '/events'
      });
    $httpProvider.interceptors.push(['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {
        return {
            'responseError': function(rejection) {
              $rootScope.$emit('ERROR_UPDATE', rejection);
              if(rejection.status === 404){
                  $location.path('/404/');                    
              }
              return $q.reject(rejection);
           }
         };
    }]);
  });
