function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).render('error', {
        message: 'You need to log in to use this feature.',
        error: { status: 401, stack: '' },
        title: 'error'
    });
}
module.exports = { isAuthenticated };   