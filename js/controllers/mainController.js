define(function() {
    angular
        .module('appModule')
        .controller('mainController', function($scope) {
            $scope.appName = 'My App';
        });
});