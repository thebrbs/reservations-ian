
DROP DATABASE IF EXISTS globalBookings;

CREATE DATABASE globalBookings;

USE globalBookings;

CREATE TABLE bookings( 
	id int AUTO INCREMENT,
	partySize int NOT NULL,
	date date,
	time varchar(50) NOT NULL,
	restaurant_id int NOT NULL,
);
