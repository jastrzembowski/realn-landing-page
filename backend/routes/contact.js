const express = require("express");
const path = require("path");
const router = express.Router();

const contact = require("../controllers/contact");

router.get("/contact", contact.getContacts);

router.post("/contact", contact.postContacts);

module.exports = router;
