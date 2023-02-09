const express = require("express")
const router = express.Router()
const contact = require("./../models/contacts")
const users = require("../models/user")
const checkAuth = require("./../Authorization/auth")

router.get("/allcontacts/:userID", checkAuth,  async (req, res)=>{
    console.log(req.params.userID)
    try{
        const allcontacts = await contact.find({ userID: req.params.userID })
        console.log("allcontacts"+ allcontacts)
        return res.status(200).json({
            contacts : allcontacts
        })
    }catch(e){
        return res.status(400).json({
            message:e.message
        });
    }
})

module.exports = router