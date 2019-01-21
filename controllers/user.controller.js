const sgMail = require('@sendgrid/mail');
const config = require('config');

module.exports = class UserController {
    static async contact (req, res) {
        let resp = { title: "contact"};
        if (Number(req.session.userId)) {
            resp.logout =true;
        }
        return res.render('contact', resp);
    }
    static async sendMessage (req, res) {
        sgMail.setApiKey(config.get('mailingkey').trim());
        const msg = {
            to: config.get('JustSayDAEmail'),
            from: req.body.email,
            subject: 'You have new notification!.',
            text: req.body.message,
            html: req.body.message,
        };
        sgMail.send(msg)
            .then((w) => {
                console.log('sent');
            })
            .catch(error => {
                console.error(error.toString());
            });
        return res.redirect('/msg-was-sent');
    }
}