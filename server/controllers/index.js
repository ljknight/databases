/*jshint quotmark: false */
/*jshint camelcase: false */
var db = require('../db');
var models = require('../models');

module.exports = {
  messages: {

    get: function(req, res) {
      var results = [];
      models.messages.get(function(err, rows, field) {
        if (err) {throw err;}
       rows.forEach(function(row) {
         results.push({
           text: row.chat,
           username: row.user_name
         });
       });
       console.log('these are the results', results);
       res.send(results);
     });

      // sequelize refactor:
      // db.Message.findAll({
      //   include: [db.User]
      // }).then(function(messages) {
      //   res.json(messages);
      // });
    },
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
     
      // sequelize refactor:
      // db.User.findOrCreate({
      //   where: {
      //     user_name: req.body.username
      //   }
      // })
      //   .then(function(user) {
      //     db.Message.create({
      //       userid: user.id,
      //       chat: req.body.text,
      //     }).then(function(message) {
      //       res.sendStatus(201);
      //       console.log("your save was successful");
      //     });
      //   });
    },

    // only for tests
    // users: {
    //   get: function(req, res) {

    //   // sequelize refactor 
    //   // db.User.findAll()
    //   //   .then(function(users) {
    //   //     res.json(users);
    //   //   });
    //   },

    //   post: function(req, res) {
    //     db.User.create({
    //       username: req.body.username
    //     }).then(function(user) {
    //       res.sendStatus(201);
    //       console.log("The user was saved successfully");
    //     });
    //   }
    // }
  }
};
