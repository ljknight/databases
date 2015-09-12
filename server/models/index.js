/*jshint multistr: true */
var db = require('../db');

module.exports = {
  messages: {
    get: function(callback) {
      // inner join
      // db.connection.query('SELECT * from messages', callback);
      db.connection.query('SELECT m.chat, u.user_name FROM messages m INNER JOIN users u ON (m.user_id=u.id)', callback);


    }, // a function which produces all the messages
    post: function(chat, username, exists) {  // username can be name or ID
      // transaction with messages + user
      if (!exists) {
        db.connection.query('START TRANSACTION;');
        db.connection.query('INSERT INTO users (user_name) VALUES (\'' + username + '\');');
        db.connection.query('INSERT INTO messages (user_id, chat) VALUES (last_insert_id(), \'' + chat + '\');');
        db.connection.query('COMMIT;');
      } else {
        db.connection.query('INSERT INTO messages (user_id, chat) VALUES (' + username + ', \'' + chat + '\');');
      }


    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function(callback) {
      db.connection.query('SELECT * from users', callback);

    },

    getUniqueUser: function(user, callback) {
      db.connection.query('SELECT id FROM users WHERE user_name=\'' + user + '\';', callback);
    },

    post: function(username) {
      db.connection.query('INSERT INTO users (user_name) VALUES (\'' + username + '\')');
    }
  }
};