angular.module('Bleeveapp').directive('meetingRoom', meetingRoom);

function meetingRoom() {
    return{
        templateUrl: 'templates/room.html',
        restrict: 'E',
        scope: {
            roomName: '='
        },
        controller: roomController

    }

}

roomController.$inject = ['$scope', '$http', 'roomService'];

function roomController($scope, $http, roomService) {
    roomService.getRoom($scope.roomName).then(function (res) {
        console.log(res);
    });

}
