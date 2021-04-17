// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT === 465,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  transporter
    .sendMail({
      from: process.env.SMTP_EMAIL_ADDRESS,
      to: process.env.SMTP_EMAIL_ADDRESS,
      subject: "Contact Form",
      text: `${req.body.message}\n\n from ${req.body.email}`,
    })
    .then(() => res.status(200).json({ message: "Message received!" }))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Sorry, your message could not be sent" });
    });
};
