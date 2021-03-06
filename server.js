const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./app/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// JavaScript Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("Listening on port: " + PORT);
})