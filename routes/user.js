const express = require('express')
const router = express.Router();
const User = require('../models/User')
const controller = require('../controllers/common')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
//create new 
const JWT_SECRET = "lms@123"
router.post('/',async (req,res)=>{
    console.log("line 9:")
    const password = req.body.password
    const hashPwd = await bcrypt.hash(password, 10)
    console.log(hashPwd)
    req.body.password = hashPwd
   controller.createLMS(User,req,res)
})
router.get('/',(req,res)=>controller.getAllLMS(User,req,res))
router.get('/:id',(req,res)=>controller.getById(User,req,res))
router.put('/:id',(req,res)=>controller.updateById(User,req,res))
router.delete('/:id',(req,res)=>controller.deleteById(User,req,res))
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email)
        const user = await User.findOne({ email: email });
        console.log(user)
        if (!user) {
            return res.status(404).send({ error: 'No user found with this email' });
        }

        const isSimilar = await bcrypt.compare(password, user.password);
        console.log(isSimilar)
        if (!isSimilar) {
            return res.status(401).send({ error: 'Incorrect password' });
        }
        const jwtToken = jwt.sign({userId:user.userid},JWT_SECRET,{expiresIn:'1h'})
        console.log("--------------------------------------------")
        console.log(jwtToken)
        console.log(user)
        return res.send({ jwtToken, user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

module.exports = router