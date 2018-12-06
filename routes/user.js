const express = require("express");
const mysql = require('mysql')
const router = express.Router();
const app = express();
const bcrypt = require('bcryptjs');
const passport = require("passport");
const session = require('express-session');
const hbs = require('express-handlebars');
const path = require('path');
const expressValidator = require('express-validator');





router.post('/registration', (req, res) =>{
        console.log("trying to create a new user");


        const email = req.body.create_email;
        const name = req.body.create_name;
        const password = req.body.create_password;

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.create_password, salt, function(err, hash) {
                const queryString = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
                getConnection().query(queryString, [name, email, hash], (err, results, fields) => {
                    if (err) {
                        console.log("failed a new user" + err)
                        res.sendStatus(500)
                        return
                    }
                    const userId = req.params.id;
                    const queryString = "SELECT * FROM users WHERE id = ?";

                    getConnection().query( queryString, [userId], (err, results, fields) => {
                        if (err) {
                            console.log("failed a new user" + err)
                            res.sendStatus(500)
                            return
                        }

                        console.log(userId);

                        req.login(userId, function(err) {
                            res.render('registration', {
                                username: "Hi " + name.toUpperCase() + "! ",
                                registrationMessage: "Your account has been activated successfully. You can now login."
                            });
                        });

                    });
                });
            });
        });
});


passport.serializeUser(function(userId, done) {
    done(null, userId);
});

passport.deserializeUser(function(userId, done) {
    done(err, userId);
});


router.post('/shop', (req, res) =>{
    console.log("trying to login");
    console.log("email: " + req.body.login_email);

    const email = req.body.login_email;
    const password = req.body.login_password;


    const queryString = "SELECT * FROM users WHERE email = ?"
    getConnection().query(queryString, [email], (err, results, fields, user) => {
        if (err) {
            console.log("failed a new user" + err)
            res.sendStatus(400)
            return
        } else {
            if (results.length > 0) {
                if ( results[0].password == password) {
                    return res.render('shop', {
                        username: email,
                        title: "shop",
                        registrationMessage: "Welcome "

                    });

                } else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            } else {
                res.send({
                    "code": 204,
                    "success": "Email does not exits"
                });
            }

        }

        req.session.user = user;
        return res.status(200).send();

        });
})


router.get('/registration', (req, res) => {
    return res.render('registration', {
        title: "registration",
        registrationMessage: "please create an account or log in"
    });
})

router.get('/about', (req, res) => {
    return res.render('about', {
        title: "about"
    });
})


router.get("/users", (req, res) => {
    const connection = getConnection()
    const queryString = "SELECT * FROM users"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
        }
        res.json(rows)
    })
})

router.get('/users/:id', (req, res) => {
    console.log("Fetching user with id: " + req.params.id);

    const connection = getConnection();


    const userId = req.params.id;
    const queryString = "SELECT * FROM users WHERE id = ?";

    connection.query( queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed for users" + err)
            res.sendsStatus(500)
            return
        }
        console.log("here are the users")

        const users = rows.map((row)=>{
            return {name: row.name, email: row.email}
        })




        res.json(users)
    })
})

router.get('/logout', function(req, res){
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b0b228f5825a1c",
    password: "7ae88a81",
    port: 3306,
    database: 'heroku_8da4bd6506e30bf',
    multipleStatements: true
})



function getConnection() {
    return pool
}



module.exports = router;

//const pool = mysql.createPool({
//    connectionLimit: 10,
//    host: "localhost",
//    user: "root",
//    password: "",
//    port: 3308,
//    database: 'daDB',
//    multipleStatements: true
//})


//CLEARDB_BLACK_URL: mysql://b0b228f5825a1c:7ae88a81@us-cdbr-iron-east-01.cleardb.net/heroku_8da4bd6506e30bf?reconnect=true
