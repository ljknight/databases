CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room_name VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(20),
  password VARCHAR(20),
  room_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(room_id)
    REFERENCES rooms(id) 
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP,
  chat TEXT,
  user_id INT,
  room_id INT,
  PRIMARY KEY(id),  
  FOREIGN KEY(user_id)
    REFERENCES users(id),
  FOREIGN KEY(room_id)
    REFERENCES rooms(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

