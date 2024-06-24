const express = require('express')
const router = express.Router();
const track = require('../models/Track')
const controller = require('../controllers/common')
router.post('/',async (req,res)=>{
   controller.createLMS(track,req,res)
})
router.get('/',(req,res)=>controller.getAllLMS(track,req,res))
router.post('/track_details',async(req,res)=>{
    console.log(req.body)
    const userid = req.body.userid
    const courseid = req.body.courseid
   
    const document = await track.find({userid:userid, courseid:courseid})
    console.log(document)
    return res.send(document)
})

module.exports = router