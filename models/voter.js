var mongoose = require("mongoose");

// Create Schema
var voterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mi: String,
    birthday: Date,
    helpType: {
        register: Boolean,
        knock: Boolean,
        phone: Boolean,
        other: Boolean
    },
    age: Number,
    location: String,
    phoneNum: Number,
    lastContacted: Date
});

module.exports = mongoose.model('Voter', voterSchema);