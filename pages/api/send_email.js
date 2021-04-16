// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT === 465,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter
    .sendMail({
      from: req.body.email,
      to: process.env.EMAIL_ADDRESS,
      subject: "lol",
      text: req.body.message,
    })
    .then(() => res.status(200).json({ message: "Message received!" }))
    .catch(() =>
      res.status(500).json({ message: "Sorry, your message could not be sent" })
    );
};
