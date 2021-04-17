// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    // secure: process.env.SMTP_PORT === 465,
    service: "sendgrid",
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  transporter
    .sendMail({
      from: req.body.email,
      to: process.env.SMTP_ADDRESS,
      subject: "lol",
      text: req.body.message,
    })
    .then(() => res.status(200).json({ message: "Message received!" }))
    .catch(() =>
      res.status(500).json({ message: "Sorry, your message could not be sent" })
    );
};
