// I believe this is all I need here

// Dependancies
const express =  require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start Listening
app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
});