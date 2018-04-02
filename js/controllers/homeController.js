define(function() {
    angular
        .module('appModule')
        .registerController('homeController', ['$scope', function($scope) {
            $scope.pageTitle = 'My App - Home page';
        }]);
});