const mongoose = require("mongoose")

const purchaseSchema = new mongoose.Schema({
    courseid: String,
    userid:String,
    purchased_at:String,
    bank_details:String,
})

module.exports = mongoose.model('Purchase',purchaseSchema)