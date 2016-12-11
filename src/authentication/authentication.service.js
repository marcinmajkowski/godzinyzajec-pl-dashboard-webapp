(function () {
    'use strict';

    angular
        .module('authentication')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', '$location'];

    function authenticationService($http, $location) {
        var authenticated = false;
        var loginPath = '/login';
        var logoutPath = '/logout';
        var homePath = '/';
        var path = homePath;

        var service = {
            authenticated: authenticated,
            loginPath: loginPath,
            logoutPath: logoutPath,
            homePath: homePath,
            path: path,
            authenticate: authenticate,
            clear: clear,
            init: init
        };

        return service;

        // *********************************
        // Internal methods
        // *********************************

        function authenticate(credentials, callback) {
            var headers = {};
            if (credentials && credentials.username) {
                headers.authorization = "Basic " + btoa(credentials.username + ":" + credentials.password);
            }

            var config = {
                headers: headers
            };

            $http.get('user', config).then(successCallback, errorCallback);

            function successCallback(response) {
                if (response.data.name) {
                    service.authenticated = true;
                } else {
                    service.authenticated = false;
                }
                $location.path(service.path == service.homePath ? service.homePath : service.path);
                callback && callback(service.authenticated);
            }

            function errorCallback() {
                service.authenticated = false;
                callback && callback(false);
            }
        }

        function clear() {
            service.authenticated = false;
            service.path = service.homePath;


            $http.post(service.logoutPath, {}).then(successCallback);
            
            // TODO better solution
            // this is because we do not want to go to login page if logout failed
            // and additionaly we need to perform any request after logout to receive new csrf token
            // (so i.e. registration just after logout could work)
            function successCallback() {
                $location.path(service.loginPath);
                service.authenticate({});
            }
        }

        function init(homePath, loginPath, logoutPath) {
            service.homePath = homePath;
            service.loginPath = loginPath;
            service.logoutPath = logoutPath;

            service.authenticate({}, successCallback);

            function successCallback(authenticated) {
                if (authenticated) {
                    $location.path(service.path);
                }
            }
        }

    }

})();