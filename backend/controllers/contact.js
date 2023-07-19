const Contact = require("../models/contact");
const { body, validationResult } = require("express-validator");

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
    if (!contacts) {
      return res.status(404).json({ error: "Unable to fetch contacts" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
};

exports.postContacts = [
  body("name").notEmpty().withMessage("Name is required"),
  body("surname").notEmpty().withMessage("Surname is required"),
  body("email").notEmpty().withMessage("Email is required"),
  body("phone").notEmpty().withMessage("Phone is required"),

  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, surname, email, phone } = req.body;

      const contact = await Contact.create({
        name,
        surname,
        email,
        phone,
      });

      res.status(201).json(contact);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to send contact" });
    }
  },
];
