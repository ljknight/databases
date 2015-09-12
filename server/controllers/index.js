/*jshint quotmark: false */
/*jshint camelcase: false */
var db = require('../db');
// var models = require('../models');

module.exports = {
  messages: {

    get: function(req, res) {
      db.Message.findAll({
        include: [db.User]
      }).then(function(messages) {
        res.json(messages);
      });
    },
    // a function which handles a get request for all messages
    post: function(req, res) {
      db.User.findOrCreate({
        where: {
          user_name: req.body.username
        }
      })
        .then(function(user) {
          db.Message.create({
            userid: user.id,
            chat: req.body.text,
          }).then(function(message) {
            res.sendStatus(201);
            console.log("your save was successful");
          });
        });
    },

    // only for tests
    users: {
      get: function(req, res) {

      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });
      },

      post: function(req, res) {
        db.User.create({
          username: req.body.username
        }).then(function(user) {
          res.sendStatus(201);
          console.log("The user was saved successfully");
        });
      }
    }
  }
};