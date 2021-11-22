CREATE DATABASE users_database;

USE users_database;

CREATE TABLE users(
    id INTEGER NOT NULL  AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    country VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

/* Test Data */

INSERT INTO users (name, country) VALUES("Santiago Olayo", "Colombia");