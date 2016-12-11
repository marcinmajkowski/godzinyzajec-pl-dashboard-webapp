(function () {
    'use strict';

    angular
        .module('godzinyzajecPlDashboardLayout')
        .controller('MainController', MainController);

    MainController.$inject = ['authenticationService', '$location', '$mdMedia'];

    function MainController(authenticationService, $location, $mdMedia) {
        var vm = this;

        vm.go = go;
        vm.authenticated = authenticated;
        vm.logout = logout;
        vm.media = $mdMedia;

        activate();

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
        }

        /**
         * Use ng-click="go('/home')" instead of ng-href="#/home".
         * This is workaround for wrongly displayed md-button with href attribute.
         */
        function go(path) {
            $location.path(path);
        }

        function authenticated() {
            return authenticationService.authenticated;
        }

        function logout() {
            authenticationService.clear();
        }

    }

})();