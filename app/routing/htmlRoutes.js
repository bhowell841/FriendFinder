// DEPENDENCIES
const path = require('path');


//  Routing
module.exports = function(app) {
    console.log('This is working')

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}





  

