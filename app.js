const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const passport = require("passport");



app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('short'))




const router = require('./routes/user.js')
app.use(router)



app.get("/", (req, res) => {
    res.redirect('/main.html');
    res.end()
})

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
console.log("running on 4000!!")
})
