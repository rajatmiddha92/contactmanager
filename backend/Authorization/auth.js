const jwt = require("jsonwebtoken")
const User = require("./../models/user")

module.exports = (req, res, next)=>{
    const authorizationHeader = req.header.authorization
    if(authorizationHeader){
        const token = authorizationHeader.split(" ")[1]
        jwt.verify(token, process.env.SECRET, async(err, payload)=>{
            try{
                if(err){
                    return res.status(401).json({error: "Unauthorized!"})
                }
                const user = await User.findOne({_id: payload._id}).select(
                    "-password"
                )
                req.user = user;
                next();
            } catch(e){
                console.log(err);
            }
        })
    } else{
        return res.status(403).json({error: "Forbidden"})
    }
}