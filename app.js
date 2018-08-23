const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('short'))




const router = require('./routes/user.js')
app.use(router)



app.get("/", (req, res) => {
console.log("Responding")
    res.redirect('./public/main.html');
})

const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
console.log("running on " + PORT)
})
