
// Dependancies
const express = require("express");
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

// Tell to look in the public folder for css
app.use(express.static('app/public'));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start Listening
app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
});