const pool = require("./src/db/db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Erro:", err);
  } else {
    console.log("Conectado:", res.rows);
  }
  pool.end();
});
