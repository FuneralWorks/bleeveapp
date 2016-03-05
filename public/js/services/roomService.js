angular.module('Bleeveapp').factory('roomService', roomService);

roomService.$inject = ['$http', 'GApi', '$rootScope'];
function roomService($http, GApi, $rootScope) {

    return {
        getCalendar: getCalendar,
        createEvent: createEvent,
        closeEvent: closeEvent
    };

    function getCalendar(name) {
        return GApi.executeAuth('calendar', 'calendarList.list').then(function (res) {
            var found=0;
            for(var i = 0, len=res.items.length; i<len; i++){
                if(res.items[i].summary == name){
                    found = 1;
                    return res.items[i];

                }
            }
            console.log("creating a new one");
            return GApi.executeAuth('calendar', 'calendars.insert', {summary:name}).then(function (res) {
                console.log(res);
                return res;
            })
        })
    }

    function createEvent(room){
        console.log(room);
        var body = {
            calendarId : room.calendar.id,
            summary : $rootScope.company,
            start :{
                dateTime: moment().format()
            },
            end :{
                dateTime: moment().format()
            }
        };
        return GApi.executeAuth('calendar', 'events.insert', body).then(function (res) {
            room.event = res;
        })
    }

    function closeEvent(room) {
        console.log(room);
        var body = {
            calendarId: room.calendar.id,
            eventId: room.event.id,
            summary: room.event.summary,
            start: room.event.start,
            end :{
                dateTime: moment().format()
            }
        };

        return GApi.executeAuth('calendar', 'events.update', body).then(function (res) {
            room.event = res;
        })
    }

}
