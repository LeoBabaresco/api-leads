require("dotenv").config();
const app = require("./app");
const initDb = require("./db/init");

const PORT = process.env.PORT || 3000;

initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Servidor rodando na porta " + PORT);
    });
  })
  .catch((err) => {
    console.error("Erro ao inicializar banco:", err);
    process.exit(1);
  });
