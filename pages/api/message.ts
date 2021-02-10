import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const USER = process.env.user;
const PASSWORD = process.env.password;

export default function handler(req, res) {
  const fields = req.body;
  let error = "";

  const result = fields.reduce((messageObj, field) => {
    let isValid = false;

    if (field.name === "honeypot") {
      if (field.value)
        error =
          "Message was unsuccessful due to the following reasons:\nInvalid information provided\n";
    } else {
      switch (true) {
        case field.name === "email":
          isValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(field.value);
          error += isValid ? "" : "Invalid email address format\n";
          break;
        case field.name === "name" || field.name === "message":
          isValid = field.value.length > 0;
          error += isValid ? "" : `No value provided for ${field.name} field\n`;
          break;
        default:
          break;
      }
      if (isValid) messageObj[field.name] = field.value;
    }
    return messageObj;
  }, {});

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "google",
    auth: {
      user: USER,
      pass: PASSWORD,
    },
  });

  if (error) res.status(406).send(error);
  else {
    const mailOptions = {
      from: USER,
      to: USER,
      subject: `Message from ${result.email}`,
      text: `${result.name},\n${result.message}`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (error) {
        res.status(500).send(err);
      } else {
        res
          .status(200)
          .send(
            `Thank you, ${result.name}, for reaching out to me. I'll respond as soon as possible.`
          );
      }
    });
  }
}
