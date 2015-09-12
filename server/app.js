/*jshint quotmark: false */

var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js')

var app = express();
module.exports.app = app;

app.use(express.static('../client'));

app.get('/', function (req, res) {
  res.send();
});

// Set what we are listening on.
app.set("port", 3000);

// db.connection.connect();


/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */



// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

