(function () {
    'use strict';

    angular
        .module('timetables')
        .controller('NewTimetableFormController', NewTimetableFormController);

    NewTimetableFormController.$inject = ['timetablesService'];

    function NewTimetableFormController(timetablesService) {
        var vm = this;

        vm.newTimetable = {};
        vm.createTimetable = createTimetable;

        activate();

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
        }

        function createTimetable(timetable) {
            timetablesService.createTimetable(timetable).then(function () {
                vm.newTimetable = {};
            });
        }

    }

})();