DROP TABLE IF EXISTS abilities CASCADE;
CREATE TABLE abilities
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    api_url VARCHAR(255)
);