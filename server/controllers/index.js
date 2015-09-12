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
            username: row.user_name
          });
        });
        console.log('these are the results', results);
        res.send(results);
      });
    },
     // a function which handles a get request for all messages
    post: function(req, res) {
      // handles user & message from client

      var chat = req.body.text;
      var user_name = req.body.username;
      models.users.getUniqueUser(user_name, function(err, rows, field) {
        if (rows.length === 0) {
          models.messages.post(chat, user_name, false);
        } else {
          user_name = rows[0].id;
          models.messages.post(chat, user_name, true);
        }
      });
      // models.users.post(user_name);
      
    } // a function which handles posting a message to the database
  },

  // only for tests
  users: {
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