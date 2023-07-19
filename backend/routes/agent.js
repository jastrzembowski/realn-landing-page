const express = require("express");
const path = require("path");
const router = express.Router();

const agent = require("../controllers/agent");

router.get("/agents", agent.getAgents);

router.post("/agents", agent.postAgents);

module.exports = router;
