const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200);
    res.contentType('text');
    res.end('/delete\n');
});

module.exports = router;
