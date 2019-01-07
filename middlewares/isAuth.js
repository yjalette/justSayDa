module.exports = function (req, res, next) {
    if (req.session.userId) {
        return next();
    }
    return res.redirect('/registration?error=access-deny');
}