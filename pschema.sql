CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(30),
    actual_name varchar(40),
    email varchar(40),
    phonenumber varchar(15)
),

CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    restaurant_name varchar(45),
    restaurant_open varchar(8),
    restaurant_close varchar(8)
),

CREATE TABLE IF NOT EXISTS individualTable (
    id SERIAL PRIMARY KEY,
    size int,
    restaurant_id int REFERENCES restaurants (id)
),

CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    user_id int,
    restaurant_id int,
    table_id int,
    partySize int,
    notes varchar(500),
    bookDate varchar(25)
)

ALTER TABLE bookings 
   ADD CONSTRAINT user_id_key
   FOREIGN KEY (user_id) 
   REFERENCES users(id);

   ALTER TABLE bookings 
   ADD CONSTRAINT restaurant_id_key
   FOREIGN KEY (restaurant_id) 
   REFERENCES restaurants(id);

   ALTER TABLE bookings 
   ADD CONSTRAINT table_id_key
   FOREIGN KEY (table_id) 
   REFERENCES individualTable(id);

ALTER TABLE bookings ADD CONSTRAINT unique_info_key UNIQUE (restaurant_id,table_id,bookDate);
