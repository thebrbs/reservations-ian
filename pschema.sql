CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(30),
    actual_name varchar(40),
    email varchar(40),
    phonenumber varchar(15)
),

CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    restaurant_name varchar(30),
    restaurant_open varchar(5),
    restaurant_close varchar(5)
),

CREATE TABLE IF NOT EXISTS individualTable (
    id SERIAL PRIMARY KEY,
    size int,
    restaurant_id int REFERENCES restaurants (id)
),

CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES users (id) ON DELETE RESTRICT,
    restaurant_id int REFERENCES restaurants (id) ON DELETE RESTRICT,
    table_id int REFERENCES individualTable (id) ON DELETE RESTRICT,
    partySize int,
    notes varchar(500),
    bookDate varchar(25)
)