DROP DATABASE IF EXISTS global_bookings;

CREATE DATABASE global_bookings;

USE global_bookings;

CREATE TABLE bookings ( 
	id INT AUTO_INCREMENT,
	party_size INT NOT NULL,
	save_date DATE,
	table_time VARCHAR(50) NOT NULL,
	restaurant_id INT NOT NULL,
	PRIMARY KEY(id)
);
