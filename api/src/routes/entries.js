const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200)
    .json(
        [{
            id: '',
            dateCreated: new Date(),
            dateUpdated: new Date(),
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@email.com',
            address: '1234 Maple St',
            city: '',
            state: '',
            zip: 0,
            country: ''
        },
        {
            id: '',
            dateCreated: new Date(),
            dateUpdated: new Date(),
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.doe@email.com',
            address: '4567 Wood Ln',
            city: '',
            state: '',
            zip: 0,
            country: '',
        }]
    );
    res.end('/entries\n');
});

module.exports = router;
