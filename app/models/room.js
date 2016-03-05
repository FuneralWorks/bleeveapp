var mongoose = require('mongoose');
console.log(mongoose);
module.exports = mongoose.model('Room', {
    name: String,
    company: String,
    eventId: String
})
