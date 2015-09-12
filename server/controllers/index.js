/*jshint quotmark: false */

var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var results = [];
      models.messages.get(function(err, rows, field) {
        console.log("This is rows[0]" + rows[0]);
        if (err) throw err;
        var thing = rows[0].chat;
        results.push({text: thing});
        res.send(results);
       
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var chat = req.body.text;
      models.messages.post(chat);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

