const Mails = require("../models/mails");
const { body, validationResult } = require("express-validator");

exports.getMails = async (req, res, next) => {
  try {
    const mails = await Mails.findAll();
    res.json(mails);
    if (!mails) {
      return res.status(404).json({ error: "Unable to fetch mails" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve mails" });
  }
};

exports.postMails = [
  body("email").notEmpty().withMessage("Email is required"),

  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const email = req.body;
      const mail = await Mails.create(email);
      res.status(201).json(mail);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to send mail" });
    }
  },
];
