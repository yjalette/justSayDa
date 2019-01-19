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
        console.log(req.body);
        sgMail.setApiKey(config.get('mailingkey').trim());
        const msg = {
            to: req.body.email,
            from: config.get('JustSayDAEmail'),
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
        res.send('sdfgsdffg');
    }
}