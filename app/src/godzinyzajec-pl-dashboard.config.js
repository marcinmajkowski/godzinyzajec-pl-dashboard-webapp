(function() {
    'use strict';

    angular
        .module("godzinyzajecPlDashboard")
        .config(config)
        .run(run);

    config.$inject = ['$httpProvider', '$mdThemingProvider', '$mdIconProvider'];
    function config($httpProvider, $mdThemingProvider, $mdIconProvider) {
        $httpProvider
            .defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        //TODO add missing assets
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("add", "./assets/svg/ic_add_black_24px.svg", 24)
            .icon("search", "./assets/svg/ic_search_black_24px.svg", 24)
            .icon("mode_edit", "./assets/svg/ic_mode_edit_black_24px.svg", 24)
            .icon("more_vert", "./assets/svg/more_vert.svg", 24)
            .icon("delete_forever", "./assets/svg/ic_delete_forever_black_24px.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);

        $mdThemingProvider
            .theme('default')
            .primaryPalette('deep-purple')
            .warnPalette('red');
    }

    run.$inject = ['authenticationService'];
    function run(authenticationService) {
        //TODO implement provider for this service
        authenticationService.init('/', '/login', '/user/logout');
    }

})();