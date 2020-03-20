const express = require('express');
const router = express.Router();
const path = require('path');
const appRoot = require('app-root-path');

router.get('/contact', function (req, res) {
    res.sendFile(path.join(appRoot + '/src/contact/contact.html'));
});

router.get('/products*', function (req, res) {
    res.sendFile(path.join(appRoot + '/src/products/products.html'));
});

router.get('/', function (req, res) {
    res.sendFile(path.join(appRoot + '/src/home/home.html'));
});

module.exports = router;