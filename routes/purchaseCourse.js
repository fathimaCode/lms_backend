const express = require('express')
const router = express.Router();
const purchase = require('../models/Purchase')
const controller = require('../controllers/common')
router.post('/',async (req,res)=>{
   controller.createLMS(purchase,req,res)
})
router.get('/',(req,res)=>controller.getAllLMS(purchase,req,res))
router.get('/:id',async(req,res)=>{
    console.log("-----id-------")
    console.log(req.params.id)
    const document = await purchase.find({userid:req.params.id})
   
    return res.send(document)
})

module.exports = router