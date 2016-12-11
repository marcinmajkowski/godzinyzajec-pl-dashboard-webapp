(function () {
    'use strict';

    angular
        .module('timetables')
        .controller('TimetablesListController', TimetablesListController);

    TimetablesListController.$inject = ['timetablesService'];

    function TimetablesListController(timetablesService) {
        var vm = this;

        vm.getTimetables = timetablesService.getTimetables;
        vm.deleteTimetable = timetablesService.deleteTimetable;

        activate();

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
        }

    }

})();