const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const passport = require("passport");
const bcrypt = require('bcryptjs');
const session = require('express-session')
const hbs = require('express-handlebars');
const path = require('path');
const expressValidator = require('express-validator');
const nodemailer = require('nodemailer');



app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'} ))

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(expressValidator());

app.use(session({
    secret: 'fyffjvhjvhj',
    resave: false,
    saveUninitialized: false,
    //    cookie: { secure: true }
}));

app.use(express.static('./public'))


app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('short'))

const router = require('./routes/user.js')
app.use(router)

app.get("/", (req, res) => {
    res.render('home', {
        username: "menu",
        title: "homepage"
    })
})

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
console.log("running on 4000")
})
