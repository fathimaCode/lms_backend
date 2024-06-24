const mongoose = require("mongoose")

const trackSchema = new mongoose.Schema({
    trackid: String,
    userid:String,
    courseid:String,
    percentage:String,
    updated_at:String,
})

module.exports = mongoose.model('Track',trackSchema)