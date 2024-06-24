const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ "message": "Hello world" });
});

const userRoutes = require('./routes/user');
const purchaseRoutes = require('./routes/purchaseCourse');
const trackRoutes = require('./routes/trackLearning');
const messageRoutes = require('./routes/messageRoute');

app.use('/.netlify/functions/server/purchase', purchaseRoutes);
app.use('/.netlify/functions/server/users', userRoutes);
app.use('/.netlify/functions/server/track', trackRoutes);
app.use('/.netlify/functions/server/message', messageRoutes);

mongoose.connect(
    'mongodb+srv://lms_task:RRpe2FGi9XBtI3eB@cluster0.nowg9nv.mongodb.net/',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});

module.exports.handler = serverless(app);
