(function () {
    'use strict';

    angular
        .module('godzinyzajecPlDashboard', [
            'ngMaterial',
            'ngResource',
            'godzinyzajecPlDashboardConstants',
            'godzinyzajecPlDashboardLayout',
            'godzinyzajecPlDashboardRoute',
            'authentication',
            'users',
            'userProfile',
            'home',
            'timetables'
        ]);

})();