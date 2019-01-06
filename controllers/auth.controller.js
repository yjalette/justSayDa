const cryptPassword = require('../helpers/crypt-password');
const {User} = require('../db/models');
const config = require('config');
const sgMail = require('@sendgrid/mail');

module.exports = class AuthController {
    static async signIn (req, res, next) {
       let userPointer = new User({
            login: req.body.login_email,
            password: cryptPassword(req.body.login_password,  config.get('salt'))
        });
        try {
            let user = await userPointer.fetch({
                require: true
            });
            if(user.get('active') != true) {
                return res.redirect('/registration?error=user-is-not-active');
            }
            let hour = 3600000;
            if (req.body.remember) {
                hour = 24 * 3600000
            }
            req.session.cookie.expires = new Date(Date.now() + hour);
            req.session.userId = user.get('id');
            return res.redirect('/shop');
        }catch (e) {
            return res.redirect('/registration?error=cred-incorrect');
        }
    }

    static async signUp (req, res, next) {
        let userPointer = new User({
            login: req.body.create_email,
            name: req.body.create_name,
            password: cryptPassword(req.body.create_password,  config.get('salt'))
        });
        
        try {
            let user = await userPointer.save();
            let id = user.get('id');
            if (Number(id)) {
                sgMail.setApiKey(config.get('mailingkey').trim());
                const msg = {
                    to: req.body.create_email,
                    from: config.get('JustSayDAEmail'),
                    subject: 'Welcome to JustSayDA.',
                    text: 'Please',
                    html: 'Please click the  <a href="' + config.get('host') + '/users/' + id + '"> link </a> below to confirm your email address and activate your account.this.',
                };
                sgMail.send(msg)
                    .then((w) => {
                        console.log('sent');
                    })
                    .catch(error => {
                        console.error(error.toString());
                    });
            }
            return res.redirect('/registration?error=user-registered');
        } catch (e) {
            return res.redirect('/registration?error=user-exist');
        }
    }

    static async confirmSignUp(req, res, next) {
        let userPointer = new User({id: req.params.id, active: false});
        try {
            let user = await userPointer.fetch({
                require: true
            });

            user = await user.save({active: true});
            return res.redirect('/registration');

        }catch (e) {
            return res.redirect('/registration?error=user-not-exist');
        }
    }
}