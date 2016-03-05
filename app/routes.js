var Room = require('./models/room');
module.exports = function(app){

    app.get('/rooms', function (req, res) {
        Room.find(function (err, rooms) {
            if(err){
                res.json({success: false, message: err});
                return;
            }
            res.json(rooms);
        })
    });

    app.post('/room',function (req, res) {
        var room = new Room();
        room.name = req.body.name;
        room.company = req.body.company;
        room.eventId = req.body.eventId;
        room.calendarId = req.body.calendarId;
        room.save(function (err, room) {
            if(err){
                res.json({success: false, message: err});
                return;
            }
            res.json(room);
        })
    });

    app.put('/room',function (req, res) {
        Room.find({name: req.body.name} , function (err, room) {
            room.name = req.body.name;
            room.company = req.body.company;
            room.eventId = req.body.eventId;
            room.calendarId = req.body.calendarId;
            
            room.save(function (err, room) {
                if(err){
                    res.json({success: false, message: err});
                    return;
                }
                res.json(room);
            })

        })
    })

    app.get('*', function (req, res) {
        res.sendfile('./public/index.html');
    })
}
