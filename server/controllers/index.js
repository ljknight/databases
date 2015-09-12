/*jshint quotmark: false */
/*jshint camelcase: false */

var models = require('../models');

module.exports = {
  messages: {

    get: function(req, res) {
      var results = [];
      models.messages.get(function(err, rows, field) {
        if (err) throw err;

        rows.forEach(function(row) {
          results.push({
            text: row.chat,
          });
        });

        res.send(results);
      });
    },
     // a function which handles a get request for all messages
    post: function(req, res) {
      var chat = req.body.text;
      // var user_name = req.body.username;
      // models.users.post(user_name);
      models.messages.post(chat);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      var results = [];
      models.users.get(function(err, rows, field) {

        if (err) throw err;
        rows.forEach(function(row) {
          results.push({
            username: row.user_name
          });
        });

        res.send(results);

      });
    },

  post: function(req, res) {
    console.log(req.body.username);
    var user_name = req.body.username;
    models.users.post(user_name);
  }
}
};