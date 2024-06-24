const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    messageId: String,
    userid:String,
    message:String,
    message_at:String,
    message_to:String,
   
})

module.exports = mongoose.model('Message',messageSchema)