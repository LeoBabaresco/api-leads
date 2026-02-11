const express = require("express");
const cors = require("cors");

const leadsRoutes = require("./routes/leads.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// rotas da API
app.use(leadsRoutes);

module.exports = app;
