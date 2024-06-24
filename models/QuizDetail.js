const mongoose = require("mongoose")

const quizDetailSchema = new mongoose.Schema({
    quizid: String,
    question: String,
    optionA:String,
    optionB:String,
    optionC:String,
    optionD:String,
    answer:String,
})

module.exports = mongoose.model('QuizDetail',quizDetailSchema)