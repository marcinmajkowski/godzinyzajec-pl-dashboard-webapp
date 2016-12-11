(function () {
    'use strict';

    angular
        .module('timetables')
        .directive('gzNewTimetableForm', newTimetableForm);

    newTimetableForm.$inject = [];

    function newTimetableForm() {
        var directive = {
            restrict: "E",
            scope: {},
            link: link,
            templateUrl: "src/timetables/view/new-timetable-form.html",
            controller: 'NewTimetableFormController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        // *********************************
        // Internal methods
        // *********************************

        function link(scope, element, attrs, vm) {
        }
    }

})();