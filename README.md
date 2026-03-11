# Notes App Backend

This is the backend of the Notes App built using Node.js, Express, and PostgreSQL.
It provides REST APIs to create, read, update, and delete notes.

## Tech Stack

* Node.js
* Express.js
* PostgreSQL

## How to Run the Backend

1. Clone the repository

git clone https://github.com/kaushiki2104/note_app-backend

2. Go to the project folder

cd note_app-backend

3. Install dependencies

npm install

4. Start the server

node server.js

The server will run on:

http://localhost:5000

## Database Setup

Create a PostgreSQL database and run the following query:

CREATE TABLE notes (
id SERIAL PRIMARY KEY,
title VARCHAR(255),
content TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## API Endpoints

Create a note

POST /api/notes

Get all notes

GET /api/notes

Get a single note

GET /api/notes/:id

Update a note

PUT /api/notes/:id

Delete a note

DELETE /api/notes/:id

## Frontend Repository

https://github.com/kaushiki2104/notes_app-frontend
