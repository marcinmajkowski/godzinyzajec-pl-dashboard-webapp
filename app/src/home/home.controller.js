(function () {
    'use strict';

    angular
        .module('home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        activate();

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
            console.log("HomeController activate()!");
        }

    }

})();