CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    username varchar(20),
    phoneNum int
),

CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    [name] varchar(30),
    [open] timestamp(0),
    [close] timestamp(0)
),

CREATE TABLE IF NOT EXISTS individualTable (
    id SERIAL PRIMARY KEY,\
    size tinyint,
    r.id REFERENCES restaurants (id)
),

CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    u.id REFERENCES users (id),
    r.id REFERENCES restaurants (id),
    t.id REFERENCES individualTable (id),
    partySize tinyint,
    notes varchar(500),
    [date] timestamp(0)
)