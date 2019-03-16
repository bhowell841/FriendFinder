const friends = require("../data/friends");

// Routing
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log("data coming in: ", req.body);
        var newUser = req.body;
        console.log("newUser: " + JSON.stringify(newUser));

        var userScore = newUser.score;
        console.log("userScore: " + userScore);


        var irishFriend = "";
        var irishImage = "";
        var greatestDifference = 100;
        

        for (var i = 0; i < friends.length; i++) {
            // check we getting the freinds database
            console.log("dataBaseFriends: " + JSON.stringify(friends[i]));
            
            // get friends score
            console.log("friends score: " + friends[i].score);
            console.log("userScore: " + userScore)
            var compare = Math.abs(parseInt(friends[i].score) - parseInt(userScore));
            console.log("compare: " + compare);

            
            if (compare < greatestDifference) {
                greatestDifference = compare;
                irishFriend = friends[i].name;
                irishImage = friends[i].photo;
                console.log("match: " + irishFriend + " difference: " + greatestDifference);
            }
        }; // end for loop
        console.log("Loop is over")
        // push the new user to the array
        friends.push(newUser);


        // send back to browser the best friend match
        res.json({
            message: "We found your Mick.",
            match: irishFriend,
            irishImage: irishImage
        });
        
        
    });
};