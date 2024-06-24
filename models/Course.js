const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseid: String,
    title: String,
    img:String,
    description:String,
    amount:String,
    created_at:String,
})

module.exports = mongoose.model('Course',courseSchema)