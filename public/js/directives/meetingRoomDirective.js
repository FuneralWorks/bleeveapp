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

roomController.$inject = ['$scope', '$http', 'roomService', '$rootScope'];

function roomController($scope, $http, roomService, $rootScope) {
    $scope.booked = false;
    $scope.room = {
        calendar: {},
        event: {}
    };
    $scope.company = $rootScope.company;
    roomService.getCalendar($scope.roomName).then(function (res) {

        $scope.room.calendar = res;
        console.log($scope.room);
    });
    $scope.handleBooking = function () {
        if($scope.booked){
            roomService.closeEvent($scope.room).then(function (res) {
                $scope.booked = false;
            });
        } else {
            roomService.createEvent($scope.room).then(function (res) {
                $scope.booked = true;
            });
        }
    }

}
