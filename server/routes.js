/*jshint quotmark: false */

var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {  // messages or users
  router.route("/" + route)  // goes to /messages or /users
    .get(controllers[route].get)  // get request on messages or users
    .post(controllers[route].post);  // post request on messages or users
}

module.exports = router;

