angular.module('Bleeveapp').factory('roomService', roomService);

roomService.$inject = ['$http'];

function roomService($http) {
    return {
        getRoom : getRoom
    };


    function getRoom(roomName) {
        return $http.get('/rooms').then(function (res) {

            console.log(res.data);

            var room = res.data.find(function (room) {
                return room.name ===roomName;
            })
            if(room){
                return room;
            } else{
                return $http.post('/room',{name: roomName}).then(function (res) {
                    return res;
                })
            }
        })
    }
}
