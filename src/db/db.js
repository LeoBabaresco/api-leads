const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "leads_db",
  password: "456654",
  port: 5432,
});

module.exports = pool;
