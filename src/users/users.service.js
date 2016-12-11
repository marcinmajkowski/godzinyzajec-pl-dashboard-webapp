(function () {
    'use strict';

    angular
        .module('users')
        .factory('usersService', usersService);

    usersService.$inject = ['$http'];

    function usersService($http) {

        var service = {
            register: register
        }

        activate();

        return service;

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
        }

        //TODO handle errors
        function register(user) {
            var userDetails = {
                credentials: btoa(user.username + ":" + user.password),
                email: user.email
            };
            return $http.post('/user', userDetails);
        }

    }

})();