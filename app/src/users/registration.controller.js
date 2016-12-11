(function () {
    'use strict';

    angular
        .module('users')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['usersService', '$location'];

    function RegistrationController(usersService, $location) {
        var vm = this;

        vm.user = {};
        vm.register = register;

        activate();

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
        }

        //TODO handle success and error
        function register(user) {
            usersService.register(user).then(function () {
                $location.path("/");
            }, function () {
                console.log("Registration failed")
            });
        }

    }

})();