function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); 
    }
    res.status(401).send('Bạn cần đăng nhập để truy cập trang này.');
}
module.exports = { isAuthenticated };