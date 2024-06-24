const mongoose = require("mongoose")

const courseDetailsSchema = new mongoose.Schema({
    courseid: String,
    title: String,
    Content:String,
    created_at:String,
})

module.exports = mongoose.model('CourseDetails',courseDetailsSchema)