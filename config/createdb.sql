-- create dbs
CREATE DATABASE todos;

-- create table
CREATE TABLE `todolist` (
     `id` int(20) NOT NULL AUTO_INCREMENT,
     `title` varchar(255) NOT NULL,
     `status` varchar(20) NOT NULL, 
     PRIMARY KEY (`id`)
) ;

Insert into `todolist` (`title`, `status`) VALUES ("say hello", "unfinish");

Insert into `todolist` (`title`, `status`) VALUES ("wakeup", "unfinish");