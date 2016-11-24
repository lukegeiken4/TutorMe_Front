'use strict';
angular.module('frontendApp', ['frontendApp.controllers', 'ui.router', 'ngAnimate', 'slick', 'ui.bootstrap'])
  .run(function($rootScope, $state) {
      $rootScope.user = {signedIn: false};
      $rootScope.sleep = function(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      };

      $rootScope.validatePage = function() {
        if(!$rootScope.user ||  !$rootScope.user.signedIn) $state.go('main');
      }

      $rootScope.signIn = function() {
        $rootScope.user.signedIn=true;
      }

      $rootScope.signOut = function() {
        $rootScope.user.signedIn=false;
        $state.go('main');
      }

      $rootScope.safeApply = function($scope, $root, fn) {
        var phase = $root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
          if (fn && (typeof(fn) === 'function')) {
            fn();
          }
        } else {
          $scope.$apply(fn);
        }
      }
  })
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,  $urlRouterProvider, $locationProvider) {
      /*$locationProvider.html5Mode(true);*/
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
    
      });

      $stateProvider
      .state('loggedIn', {
        url: '/loggedIn',
        templateUrl: 'views/loggedIn.html',
        controller: 'LoggedInCtrl',
        params: {
          obj: null
        }
    
      });

  }]);
