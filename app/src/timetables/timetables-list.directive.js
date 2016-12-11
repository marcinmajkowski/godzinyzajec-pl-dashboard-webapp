(function () {
    'use strict';

    angular
        .module('timetables')
        .directive('gzTimetablesList', timetablesList);

    timetablesList.$inject = [];

    function timetablesList() {
        var directive = {
            restrict: "E",
            scope: {},
            link: link,
            templateUrl: "src/timetables/view/timetables-list.html",
            controller: 'TimetablesListController',
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