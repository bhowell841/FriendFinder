const friends = require("../data/friends");

// Routing
module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        res.json(friends)
    });

    app.post("/api/friends", function(req, res) {
        console.log("data coming in: ", req.body);
        var newUser = req.body;
        console.log("newUser: " + JSON.stringify(newUser));

        var userScore = newUser.score;
        console.log("userScore: " + userScore);
   

    var irishFriend = "";
    var irishImage = "";
    var greatestDifference = 100;
    var match ="";

    for (var i = 0; i < friends.length; i++){
        // check we getting the freinds database
        console.log("irishFriend: " + JSON.stringify(friends[i]));
        var userDifference = 0;
        // get friends score
        console.log("friends score: " + friends[i].score);
        console.log("userScore: " + userScore)
        var compare = Math.abs(parseInt(friends[i].score) - parseInt(userScore));
        console.log("compare: " + compare);

        if (compare < greatestDifference) {
            greatestDifference = compare;
            match = friends[i].name;
            irishImage = friends[i].photo;
            console.log("match: " + match + " difference: " + greatestDifference);
        }
    }; // end for loop
    
    // push the new user to the array
    friends.push(newUser);

    res.json({status: "OK", match: match, irishImage: irishImage});
    });
};