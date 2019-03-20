const friends = require("../data/friends.js");

// API Route
function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // POST Route, also compares friends scores
  app.post("/api/friends", function(req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]));
    }
    newFriend.scores = scoresArray;


    // Loops through friend array to calculate scores
    var comparisonArr = [];
    for (var i = 0; i < friends.length; i++) {
      var compare = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        compare += Math.abs(
          newFriend.scores[j] - friends[i].scores[j]
        );
      }
      comparisonArr.push(compare);
    }


    // Compares scores
    var matchIndex = 0;
    for (var i = 1; i < comparisonArr.length; i++) {
      if (
        comparisonArr[i] <= comparisonArr[matchIndex]
      ) {
        matchIndex = i;
      }
    }
    var bestMatch = friends[matchIndex];
    res.json(bestMatch);
    friends.push(newFriend);
  });
}

module.exports = apiRoutes;
