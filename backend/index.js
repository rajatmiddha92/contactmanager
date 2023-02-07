const express = require("express");
const conn = require("./connection/conn");
const cors = require("cors");
const registerRoute = require("./routes/register");
const addContact=require('./routes/addcontacts')
const deleteContact=require('./routes/deletecontact')
const app = express();
let port = 5500;
conn();

app.use(cors());
app.use(registerRoute);
app.use(addContact)
app.use(deleteContact)


app.listen(port, () => console.log(`app running on port ${port}`));
