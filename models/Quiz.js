const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
    quizid: String,
    courseid: String,
    totalQuestion:String,
    created_at:String,
})

module.exports = mongoose.model('Quiz',quizSchema)