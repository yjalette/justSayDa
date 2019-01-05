module.exports = function (req, res, next) {
    if (req.session.userId == 'undefined' || req.session.userId === undefined || !req.session.userId) {
        return next();
    }
    return res.redirect('/shop');
}