const express=require('express');
const user=require('../models/user')
const userModel = require('../models/user')
const bcrypt = require("bcrypt")

const router= express.Router()
router.use(express.urlencoded())
router.use(express.json())

//post method
router.post('/register',async(req,res)=>{
   try{
      const {email, password, confirmPassword} = req.body
      if(password===confirmPassword){
         bcrypt.hash(password, 10, async(err, cryptedPassword)=>{
            const result = await userModel.create({
               email,
               password:cryptedPassword
            })
            return res.status(201).json({
               Status:"Success",
               Message:result
            })
         })  
      }
      else{
         return res.json({
            status:"Failed",
            message:"Password Not with confirm password",
            data:req.body
         })
      }
      
   }catch(e){
      res.status(400).json({
         status:"Failed",
         Message:e
      })
   }
 })

module.exports= router