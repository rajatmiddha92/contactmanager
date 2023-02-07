const express = require("express");
const conn = require("./connection/conn");
const cors = require("cors");
const registerRoute = require("./routes/register");
const logInRoute = require('./routes/Login')
const app = express();
let port = 5500;
conn();

const fileUploader =  require("express-fileupload")
//Midlewares
app.use(fileUploader())
app.use(cors());
app.use(registerRoute);
app.use(logInRoute)

app.listen(port, () => console.log(`app running on port ${port}`));
