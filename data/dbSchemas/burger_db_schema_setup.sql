CREATE DATABASE burger_log_db;
USE burger_log_db;

CREATE TABLE burgers(
	id int NOT NULL auto_increment,
    burger varchar(255) NOT NULL,
    eaten_by varchar(255) not null default ' ',
    has_been_eaten boolean not null default 0,
    primary key (id)
);

INSERT INTO burgers (burger) VALUES ('Chicken'),('Steak'),('Cheeseburger');
INSERT INTO burgers (burger,eaten_by,has_been_eaten) VALUES ('Veggie','Shaun',1);

SELECT * FROM burgers;

Truncate table burgers;