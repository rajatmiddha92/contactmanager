const express = require('express')
const router = express.Router()

//post method
router.post("/post", (req, res)=>{
    res.send("I am from login page")
})

module.exports = router