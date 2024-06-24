const express = require('express')
const router = express.Router();
const message = require('../models/Message')
const controller = require('../controllers/common')
router.post('/',async (req,res)=>{
   controller.createLMS(message,req,res)
})
router.get('/',(req,res)=>controller.getAllLMS(message,req,res))
router.get('/:userid',async(req,res)=>{
    const useridInfo = req.params.userid
    const documents = await message.find({
        $or: [
          { userid: useridInfo },
          { message_to: useridInfo }
        ]
      });
  
    return res.send(documents)
})

module.exports = router