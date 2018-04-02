define(function() {
    var appModule = angular.module('appModule', ['ngRoute']);

    appModule.factory('loadcontroller', function($q) {
        return {
            'load': function(controller) {
                var defered = $q.defer();
                require([controller], function() {
                    defered.resolve();
                });
                return defered.promise;
            }
        }
    });

    appModule.config(['$controllerProvider', function($controllerProvider) {
        appModule.registerController = $controllerProvider.register;
    }])

    appModule.config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : '/views/index.html'
        })
        .when('/home', {
            controller: 'homeController',
            templateUrl: '/views/home.html',
            resolve : ['loadcontroller', function(loadcontroller) {
                return loadcontroller.load('controllers/homeController')
            }]
        })
        .when('/profile', {
            controller: 'profileController',
            templateUrl: '/views/profile.html',
            resolve: ['loadcontroller', function(loadcontroller) {
                return loadcontroller.load('controllers/profileController')
            }]
        });
    });

    require(['controllers/mainController'], function() {
        angular.bootstrap(document, ['appModule'])
    });
    
});