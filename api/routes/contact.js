const express = require('express');
const router = express.Router();

router.post("/", function (req, res, next) {
    try {
        const body = req.body;
        res.status(200).json(body);
        res.end();
    } catch (err) {
        res.status(500).json(err);
        res.end();
    }
});

module.exports = router;