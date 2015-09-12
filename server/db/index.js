/* jshint camelcase: false */
/*jshint quotmark: false */
// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'chat'
// });

// module.exports.connection = connection;


// -------------  refactor with sequelize ------------- 


var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "", {
  host: 'localhost',
  dialect: 'mysql'
});

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('User', {
  user_name: Sequelize.STRING
});

var Message = sequelize.define('Message', {
  chat: Sequelize.STRING,
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

module.exports.User = User;
module.exports.Message = Message;