const email = require("../models/email");
const fs = require('fs');
const path = require('path');

exports.setEmail = async (req, res, next) => {
    const { to, subject, htmlContent } = req.body;
    let emailSent;
  
    if (subject.includes('Agent')) {
      emailSent = await emailModel.sendEmail(to, subject, htmlContent);
    } else {
      const emailTemplatePath = path.join('../util', 'usermail.html');
      fs.readFile(emailTemplatePath, 'utf8', async (err, data) => {
        if (err) {
          console.error('Error reading email template:', err);
          res.status(500).json({ error: 'Failed to send email' });
          return;
        }
  
        emailSent = await emailModel.sendEmail(to, subject, data);
  
        if (emailSent) {
          res.status(200).json({ message: 'Email sent successfully' });
        } else {
          res.status(500).json({ error: 'Failed to send email' });
        }
      });
    }
  };