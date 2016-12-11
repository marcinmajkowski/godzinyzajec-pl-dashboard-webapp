(function () {
    'use strict';

    angular
        .module('userProfile')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['userProfileService'];

    function UserProfileController(userProfileService) {
        var vm = this;

        vm.userProfile = {};

        activate();

        // *********************************
        // Internal methods
        // *********************************

        function activate() {
            userProfileService.getUserProfile().then(function (userProfile) {
                vm.userProfile = userProfile;
            });
        }

    }

})();