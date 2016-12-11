(function () {
    'use strict';

    angular
        .module('timetables')
        .factory('timetablesService', timetablesService);

    timetablesService.$inject = ['$http', 'apiUrl'];

    function timetablesService($http, apiUrl) {
        var timetablesUrl = apiUrl + '/timetables';

        var timetables = [];

        var service = {
            getTimetables: getTimetables,
            createTimetable: createTimetable,
            deleteTimetable: deleteTimetable
        }

        activate();

        return service;

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
            console.log("timetablesService activate() called");

            //TODO error handling
            $http.get(timetablesUrl).then(function (response) {
                service.timetables = [].concat(response.data._embedded.timetables);
            });
        }

        function getTimetables() {
            return service.timetables;
        }

        function createTimetable(timetable) {
            //TODO handle error
            return $http.post(timetablesUrl, timetable).then(function (response) {
                var createdTimetable = response.data;
                service.timetables.push(createdTimetable);
                return createdTimetable;
            });
        }

        function deleteTimetable(timetable) {
            return $http.delete(timetable._links.self.href).then(function () {
                var index = service.timetables.indexOf(timetable);
                if (index > -1) {
                    service.timetables.splice(index, 1);
                }
            });
        }

    }

})();