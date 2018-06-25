CREATE KEYSPACE IF NOT EXISTS booking
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
  };

USE booking;

CREATE TABLE IF NOT EXISTS bookings (
  restaurantName text,
  individualTableId int,
  id int,
  userName text,
  userActualName text,
  email text,
  phoneNumber int,
  partySize int,
  notes text,
  bookDate text,
  PRIMARY KEY (restaurantName, bookDate)
);