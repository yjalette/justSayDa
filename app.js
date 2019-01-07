const express = require("express");
const app = express();
const bodyParser = require('body-parser');;
const session = require('express-session')
const hbs = require('express-handlebars');
const path = require('path');
const expressValidator = require('express-validator');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'} ))

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(expressValidator());

app.use(session({
    secret: '!W1fyffjvhjvhj',
    resave: false,
    saveUninitialized: false,
    //    cookie: { secure: true }
}));

app.use(express.static('./public'))

const router = require('./routes/user.js')
app.use(router)

app.get("/", (req, res) => {
    let resp = {
        username: "menu",
        title: "homepage"
    };
    if (Number(req.session.userId)) {
        resp.logout =true;
    }
    res.render('home', resp);
});

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
console.log("running on 4000")
})
