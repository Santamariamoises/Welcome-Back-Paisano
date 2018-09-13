DROP DATABASE IF EXISTS sources;

CREATE DATABASE sources;

USE sources;

CREATE TABLE resources (
  id int NOT NULL AUTO_INCREMENT,
  logo varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  description varchar(100) NOT NULL,
  url varchar(75) NOT NULL,
  PRIMARY KEY (ID)
);


INSERT INTO resources (logo, name, description, url) VALUES ("GUeJ6pq", "Hola<code/>", "Community that will help immigrants refugees, by providing aid and education", "http://www.holacode.com");
INSERT INTO resources (logo, name, description, url) VALUES ("SwYjyG2", "Otros Dream in Action", "Mutual support to young people who grew up in the US", "http://www.odamexico.org");
INSERT INTO resources (logo, name, description, url) VALUES ("uBYKTIB", "Pocho House", "Services and help to re-integrate to Mexico", "http://www.newcomienzos.org");
INSERT INTO resources (logo, name, description, url) VALUES ("E7XdvBD", "Seguro de desempleo", "Get fiancial assistance while looking for a job in Mexico", "http://www.segurodedesempleo.cdmx.gob.mx/requisitios_migrantes.php");
INSERT INTO resources (logo, name, description, url) VALUES ("eOrVbSw", "CDMX sedrec", "secreatry of goverment where you can obtain your ID", "https://www.sederec.cdmx.gob.mx/secretaria/tramita-tu-tarjeta-sederec");


CREATE TABLE teamMembers (
  id int NOT NULL AUTO_INCREMENT,
  photo varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  about varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO teamMembers (photo, name, about) VALUES ("pRNzIJa", "Ulises Santillan", "Born in Jalisco, grew up in North Carolina; you're not alone, I am here to help");
INSERT INTO teamMembers (photo, name, about) VALUES ("IkMy1NN", "Moises Santamaria", "I was born in Morelita, Guerrero: I lived in Santa Barbra for 28 years. I only have a year here in Mexico City and wish I had all this info in this app");
INSERT INTO teamMembers (photo, name, about) VALUES ("tY9vzt1", "Fernando Figueroa", "As an immigrant myself; I understand the struggles, I am here to help");
INSERT INTO teamMembers (photo, name, about) VALUES ("4kErWao", "Brian Ramirez", "Born in Mexico City grew up in Atlanta GA Hola-code engineer glad to help");

CREATE TABLE chatBoxData (
  id int  NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  gender varchar(10) NOT NULL,
  lived varchar(20) NOT NULL,
  currlocation varchar(20) NOT NULL,
  age int NOT NULL,
  PRIMARY KEY(ID)
);

INSERT INTO chatBoxData (name, gender, lived, currlocation, age) VALUES ("Fernando", "Male", "Michigan", "CDMX", 40 )


/*  Execute this file from the command line by typing:
*    mysql -u root < server/schema.sql
*  to create the database and the tables.
*  command list for mysql:
*	http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.html*/
