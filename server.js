// Importing packages/modules that will be needed for my code
const express = require('express');
const app = express();

// the routes to my html and api files
const api_routes = require('./routes/api-routes');
const html_routes = require('./routes/html-routes');

// defines what my port will be 
const Port = process.env.PORT || 3001;

// setting up middleware in my express server
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(Port, () => {
    console.log(`Server running on https://localhost:${Port}`);
})
