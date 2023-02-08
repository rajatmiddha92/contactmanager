const express = require("express")
const router = express.Router()
const contact = require("./../models/contacts")
const users = require("../models/user")
const checkAuth = require("./../Authorization/auth")

router.get("/allcontact/:userID/:search", async (req, res) => {
    console.log(req.params.userID)
    let search = `^${req.params.search}`
    try {
        const searchedUser = await contact.find({
            userID: req.params.userID,
            $or: [{ email: { $regex: search, $options: "i" } },]
        })
            .populate(
                "userID",
            )
        // console.log("searchedUser" + searchedUser)
        return res.status(200).json({
            contacts: searchedUser
        })
    } catch (e) {
        console.log(e);
    }
})

module.exports = router