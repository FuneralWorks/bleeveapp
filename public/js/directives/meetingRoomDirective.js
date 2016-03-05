angular.module('Bleeveapp').directive('meetingRoom', meetingRoom);

function meetingRoom() {
    return{
        templateUrl: 'templates/room.html',
        restrict: 'E',
        scope: {
            room: '='
        },
        controller: roomController

    }

}

roomController.$inject = ['$scope'];

function roomController($scope) {
    $scope.color = 'blue';
    console.log($scope);
}
