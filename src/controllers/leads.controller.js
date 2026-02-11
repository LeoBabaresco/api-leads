const pool = require("../db/db");

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, source } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "name e email são obrigatórios" });
    }

    const result = await pool.query(
      `INSERT INTO leads (name, email, phone, source)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, email, phone || null, source || "unknown"]
    );

    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "erro no servidor" });
  }
};

exports.listLeads = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM leads ORDER BY id DESC`);
    return res.json(result.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "erro no servidor" });
  }
};

exports.webhookCreateLead = async (req, res) => {
  try {
    // aceita diferentes formatos comuns de webhook
    const name = req.body.name || req.body.nome || req.body.full_name;
    const email = req.body.email || req.body.mail;

    const phone = req.body.phone || req.body.telefone || null;
    const source = req.body.source || "webhook";

    if (!name || !email) {
      return res.status(400).json({ error: "Webhook precisa de name e email" });
    }

    const result = await pool.query(
      `INSERT INTO leads (name, email, phone, source)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, String(email).toLowerCase(), phone, source]
    );

    return res.status(201).json({ ok: true, lead: result.rows[0] });
  } catch (err) {
    if (err.code === "23505") {
      return res.status(409).json({ error: "lead com esse email já existe" });
    }
    console.log(err);
    return res.status(500).json({ error: "erro no servidor" });
  }
};
