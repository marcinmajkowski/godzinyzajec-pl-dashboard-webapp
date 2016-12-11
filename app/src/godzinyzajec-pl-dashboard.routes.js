(function() {
    'use strict';

    angular
        .module('godzinyzajecPlDashboardRoute', ['ngRoute', 'authentication'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'src/users/view/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .when('/registration', {
                templateUrl: 'src/users/view/registration.html',
                controller: 'RegistrationController',
                controllerAs: 'vm'
            })
            .when('/user-profile', {
                templateUrl: 'src/user-profile/view/user-profile.html',
                controller: 'UserProfileController',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: 'src/home/view/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    run.$inject = ['$rootScope', '$location', 'authenticationService'];
    function run($rootScope, $location, authenticationService) {
        $rootScope.$on('$routeChangeStart', onRouteChangeStart);

        var notRequiringAuthenticationPaths = [
            authenticationService.loginPath,
            '/registration'
        ];

        function onRouteChangeStart() {
            if (notRequiringAuthenticationPaths.indexOf($location.path()) < 0) {
                authenticationService.path = $location.path();
                if (!authenticationService.authenticated) {
                    $location.path(authenticationService.loginPath);
                }
            } else if (authenticationService.authenticated) {
                authenticationService.path = '/';
                $location.path('/');
            }
        }
    }

})();