var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      
      db.connection.query('SELECT * from messages', callback);
      // query
      // returns all messages in messages
    }, // a function which produces all the messages
    post: function (chat) {
      db.connection.query('INSERT INTO messages (chat) VALUES (\'' + chat + '\')');
      // inserting chat into messages
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


