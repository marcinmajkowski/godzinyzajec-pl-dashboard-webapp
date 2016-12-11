(function () {
    'use strict';

    angular
        .module('users')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authenticationService'];

    function LoginController(authenticationService) {
        var vm = this;

        vm.credentials = {};
        vm.error = false;
        vm.login = login;

        activate();

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
        }

        function login(credentials) {
            authenticationService.authenticate(credentials, successCallback);

            function successCallback(authenticated) {
                if (authenticated) {
                    console.log("Login succeeded");
                    vm.error = false;
                } else {
                    console.log("Login failed");
                    //TODO toast?
                    vm.error = true;
                }
            }
        }

    }

})();