const express = require("express");
const router = express.Router();

const leadsController = require("../controllers/leads.controller");

router.post("/leads", leadsController.createLead);
router.get("/leads", leadsController.listLeads);

module.exports = router;

router.post("/webhook/leads", leadsController.webhookCreateLead);

