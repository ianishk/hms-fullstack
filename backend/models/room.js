const mongoose = require("mongoose")
const {Schema} = mongoose;

const room = Schema({
    roomNo: {
        type: Number,
        required: true
    },
    block: {
        type: String,
        required: true,
    },
    pricePerDay: {
        type: Number,
        required: true
    }
})

const Room = mongoose.model('Room',room);

module.exports = Room