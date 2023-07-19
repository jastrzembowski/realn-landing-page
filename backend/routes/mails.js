const express = require("express");
const path = require("path");
const router = express.Router();

const mails = require("../controllers/mails");

router.get("/mails", mails.getMails);

router.post("/mails", mails.postMails);

module.exports = router;
