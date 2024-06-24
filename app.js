const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.json({"message":"Hello world "})
})

const userRoutes = require('./routes/user')
const purchaseRoutes = require('./routes/purchaseCourse')
const trackRoutes = require('./routes/trackLearning')
const messageRoutes = require('./routes/messageRoute')

app.use('/purchase',purchaseRoutes)
app.use('/users',userRoutes)
app.use('/track',trackRoutes)
app.use('/message',messageRoutes)
mongoose.connect(
    'mongodb+srv://lms_app:fyQNemTn5mXwrlBO@cluster0.hpulfff.mongodb.net/'
  
    
).then(()=>{
    const port = process.env.PORT || 3001
    app.listen(port,()=>{
        console.log("Server is running")
    })
}).catch(err=>{
    console.log("Error occured",err)
})
