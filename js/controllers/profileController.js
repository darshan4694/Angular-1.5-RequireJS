define(function() {
    angular
        .module('appModule')
        .registerController('profileController', function($scope) {
            $scope.pageTitle = 'My App - Profile page';
        });
});