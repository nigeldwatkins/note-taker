// Importing packages/modules that will be needed for my code
const router = require('express').Router();
const path = require('path');

router.get('/', (req, res,) => {
    res.sendFile(path.join(__filename, '../public/index.html'));
});

router.get('/notes', (req, res,) => {
    res.sendFile(path.join(__filename, '../public/notes.html'))
});

module.exports = router;