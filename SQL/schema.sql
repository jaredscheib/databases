CREATE DATABASE CHAT;

USE chat;

/*
 CREATE <TABLE>
 DROP <TABLE>

 SELECT
 INSERT
 UPDATE
 DELETE

 WHERE
 SET

*/

CREATE TABLE Users
(
  U_ID int NOT NULL AUTO_INCREMENT,
  username char(100) NOT NULL,
  PRIMARY KEY (U_ID)
);

CREATE TABLE Rooms
(
  R_ID int NOT NULL AUTO_INCREMENT,
  roomname char(100) NOT NULL,
  PRIMARY KEY (R_ID)
);

CREATE TABLE Friendships
(
  F_ID int NOT NULL AUTO_INCREMENT,
  U_ID_Source int NOT NULL,
  U_ID_Target int NOT NULL,
  PRIMARY KEY (F_ID),
  FOREIGN KEY (U_ID_Source) REFERENCES Users(U_ID),
  FOREIGN KEY (U_ID_Target) REFERENCES Users(U_ID)
);

CREATE TABLE Messages
(
  M_ID int NOT NULL AUTO_INCREMENT,
  content char(255),
  moment timestamp,
  U_ID int NOT NULL,
  R_ID int NOT NULL,
  PRIMARY KEY (M_ID),
  FOREIGN KEY (U_ID) REFERENCES Users(U_ID),
  FOREIGN KEY (R_ID) REFERENCES Rooms(R_ID)
);

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/


