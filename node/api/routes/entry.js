const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status().json({
        message: 'Handing GET request to /entry'
    });
});

module.exports = router;
