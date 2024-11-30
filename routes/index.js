const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('../components/home/home-controller');
const catalogController = require('../components/catalog/catalog-controller');
const productsController = require('../components/products/products-controller');
const aboutUsController = require('../components/about-us/about-us-controller');
const contactUsController = require('../components/contact-us/contact-us-controller');
const userController = require('../components/users/users-controller');
const searchController = require('../components/search/search-controller');

//middleware
const { isAuthenticated } = require('../components/middleware/middleware');

router.get('/', homeController.getHome);

router.get('/home', homeController.getHome);

router.get('/catalog', catalogController.getCatalog);// , isAuthenticated

router.get('/product', productsController.getProduct);

router.get('/about-us', aboutUsController.getAboutUs);

router.get('/contact-us', contactUsController.getContactUs);

router.get('/sign-up', userController.getSignUp);

router.get('/log-in', userController.getLogin);

router.get('/search', searchController.getSearch);

router.get('/log-out', userController.getLogout);

module.exports = router;