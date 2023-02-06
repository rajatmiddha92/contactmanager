const mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    email: {type: String, unique:true}, 
    password: String,
    confpassword: String,
  });
  const users = mongoose.model("users", userSchema, "users");

  module.exports= users