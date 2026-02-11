const pool = require("./db");

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      phone TEXT,
      source TEXT DEFAULT 'unknown',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);
}

module.exports = initDb;
