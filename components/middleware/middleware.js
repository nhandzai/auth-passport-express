function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send('You have to login to use this feature');
}
module.exports = { isAuthenticated };