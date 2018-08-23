const express = require("express");
const mysql = require('mysql')
const router = express.Router();
const app = express();

app.use(express.static(__dirname + '/public'));

router.post('/users_create', (req, res) =>{
    console.log("trying to create a new user");

    const name = req.body.create_name;
    const email = req.body.create_email;
    const password = req.body.create_password;
    const queryString = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
    getConnection().query(queryString, [name, email, password], (err, results, fields) => {
        if (err) {
            console.log("failed a new user" + err)
            res.sendStatus(500)
            return
        }

        console.log("added a new user with id:", results.insertId);
        res.redirect('/main.html');
        res.end()
    });

})

router.post('/users_login', (req, res) =>{
    console.log("trying to login");
    console.log("email: " + req.body.login_email);

    const email = req.body.login_email;
    const password = req.body.login_password;

    const queryString = "SELECT * FROM users WHERE email = ?"
    getConnection().query(queryString, [email], (err, results, fields) => {
        if (err) {
            console.log("failed a new user" + err)
            res.sendStatus(400)
            return
        } else {
            if (results.length > 0) {
                if ( results[0].password == password) {
                    res.redirect('/shop.html');
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

    });

})

router.get('/messages', (req, res) => {
    console.log("meow mes-s")
    res.end()
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
            return {name: row.name, email: row.email, password: row.password}
        })


        res.json(users)
    })
})

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    port: 3309,
    database: 'daDB',
    multipleStatements: true
})

function getConnection() {
    return pool
}



module.exports = router;
