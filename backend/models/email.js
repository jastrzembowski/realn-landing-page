const nodemailer = require("nodemailer");

const Email = {
  transporter: nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false,
    auth: {
      user: "nieruchomosci@realn.pl",
      pass: "pass",
    },
  }),

  async sendEmail(to, subject, htmlContent) {
    const mailOptions = {
      from: "nieruchomosci@realn.pl",
      to: to,
      subject: subject,
      html: htmlContent,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      return true;
    } catch (error) {
      console.log("Error", error);
      return false;
    }
  },
};

module.exports = Email;
