const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/user')
const jwt = require("jsonwebtoken")
//jwt Secret key
const secret = "ContactManager"
//Middle wares
router.use(express.json())
router.use(express.urlencoded())

//post method
router.post("/login", async(req, res)=>{
    try{
        const {email, password} = req.body;
        const data = await userModel.findOne({email:email})
        if(!data){
            return res.status(404).json({
                status:"Failed",
                message:"Not Found"
            })
        }
        else{
            bcrypt.compare(password, data.password, (err, result)=>{
                if(err){
                    console.log(err.message)
                }
                else{
                    console.log(data._id)
                    const token=jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: data._id
                      }, secret);
                    res.status(200).json({
                        status:"Success",
                        message:token
                    })
                }
            })
           
        }
        
    }catch(e){
        console.log(e)
    }
})

module.exports = router