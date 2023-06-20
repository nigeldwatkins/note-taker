// Importing packages/modules that will be needed for my code
const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// get request to the api notes endpoint of a server
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbJson);
});

// route handler that handles a post request to api notes endpoint
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newFeedback = {
        title: "req.body.title",
        text: "req.body.text",
        id: "uuidv4()",
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;