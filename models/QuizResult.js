const mongoose = require("mongoose")

const quizResultSchema = new mongoose.Schema({
    examid: String,
    userid:String,
    quizId:String,
    totalScore:String,
    created_at:String,
})

module.exports = mongoose.model('QuizResult',quizResultSchema)