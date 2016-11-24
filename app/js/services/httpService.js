'use strict';
angular.module('frontendApp.controllers').service('HttpService', function($state, $http, EnvConfig) {
    
    /*
    *   Get request to host and path that is specified
    */
    this.getRequest = function(host, path, callback) {
        
        $http.get(EnvConfig[host] + path).success(function (data, status, headers, config) {
            if(!data.error) {
              callback(false, data);
            } else {
              callback(true, data);
            }
        }).error(function (data, status, headers, config) { 
            callback(true, 'Was not able to talk to ' + host);
        });
    }

    /*
    *   Post request to host and path that is specified, json will be sent with request
    */
    this.postRequest = function(host, path, json, callback) {
        $http.post(EnvConfig[host] + path, json).success(function (data, status, headers, config) {
            if(!data.error) {
              callback(false, data);
            } else {
              callback(true, data);
            }
        }).error(function (data) {
            callback(true, 'Was not able to talk to ' + host);
        });
    };
});