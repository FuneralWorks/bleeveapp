angular.module('Bleeveapp').config(routeConfig);

routeConfig.$inject = ['$routeProvider', '$locationProvider'];

function routeConfig($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    });
    // .when('/meetingRoom',{
    //     templateUrl: 'views/meetingRoom.html',
    //     controller: 'meetingRoomController'
    // });

    $locationProvider.html5Mode(true);
}
