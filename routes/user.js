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

const {AuthController, UserController} = require('../controllers');
const {isAuth, isGuest} = require('../middlewares');
const {ErrorFactory} = require('../factories');

router.post('/sign-in', AuthController.signIn);

router.post('/sign-up', AuthController.signUp);

router.get('/shop', isAuth, (req, res) =>{
    return res.render('shop', {
        logout: true,
        title: "shop",
        registrationMessage: "Welcome "
    });
});

router.get('/registration', isGuest, (req, res) => {
    let registrationMessage = ErrorFactory.getText(req.query.error || null);
    return res.render('registration', {
        title: "registration",
        registrationMessage
    });
})

router.get('/about', (req, res) => {

    let resp = { title: "about"};
    if (Number(req.session.userId)) {
        resp.logout =true;
    }
    return res.render('about', resp);
})

router.get('/contact', UserController.contact);
router.post('/contact', UserController.sendMessage);
//////////////////////////////////////////////////////////////////
router.post('/confirm-password', AuthController.confirmPassword);

router.get('/reset', AuthController.reset);

router.get('/success', (req, res) => {

    let resp = { title: "success"};
    return res.render('success', resp);
});

router.get('/msg-was-sent', (req, res) => {
    let resp = { title: "msg-was-sent"};
    return res.render('msg-sent', resp);
});

router.get('/users/:id', AuthController.confirmSignUp);
router.post('/forgot-password', AuthController.forgotPass);

router.get('/logout', function(req, res){
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
