require.config({
    baseUrl:'js',
    paths:{
        'angular' : [
            'https://code.angularjs.org/1.5.5/angular.min',
            'lib/angular.min'
        ],
        'angular_route' : [
            'https://code.angularjs.org/1.5.5/angular-route.min',
            'lib/angular.route.min'
        ],
        'appModule':'appModule'
    },
    shim:{
        'angular_route':{
            deps:['angular']
        },
        'appModule' : {
            deps:['angular_route']
        }
    }
});

require(['appModule'], function() {

});