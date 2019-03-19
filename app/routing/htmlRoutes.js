var path = require('path');


// HTML Routes
function htmlRoutes(app) {

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}

// Export for use in server.js file
module.exports = htmlRoutes;