const express=require('express');
const user=require('../models/user')
const contact=require('../models/contacts')

const router= express.Router()
router.use(express.json())


router.get('/',async(req,res)=>{
   res.send('ok') 
})
router.post('/',async(req,res)=>{
    console.log(req.body)
    res.send('ok')
 })

module.exports= router