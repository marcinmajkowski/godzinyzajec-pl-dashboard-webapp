(function () {
    'use strict';

    angular
        .module('userProfile')
        .factory('userProfileService', userProfileService);

    userProfileService.$inject = ['$http'];

    function userProfileService($http) {

        var service = {
            getUserProfile: getUserProfile
        }

        activate();

        return service;

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
        }

        //TODO handle error if any
        //TODO new profile created - first visit
        function getUserProfile() {
            return $http.get('/api/user-profile').then(function (response) {
                return response.data;
            });
        }

    }

})();