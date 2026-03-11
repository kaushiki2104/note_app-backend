const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "notesdb",
  password: "avi",
  port: 5432,
});

pool.connect()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Connection error", err));

module.exports = pool;