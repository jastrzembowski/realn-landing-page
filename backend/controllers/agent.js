const Agent = require("../models/agent");
const { body, validationResult } = require("express-validator");

exports.getAgents = async (req, res, next) => {
  try {
    const agents = await Agent.findAll();
    res.json(agents);
    if (!agents) {
      return res.status(404).json({ error: "Unable to fetch agents" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve agents" });
  }
};

exports.postAgents = [
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

      const agent = await Agent.create({
        name,
        surname,
        email,
        phone,
      });

      res.status(201).json(agent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to add agent" });
    }
  },
];
