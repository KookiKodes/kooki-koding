import nodemailer from "nodemailer";

const USER = process.env.user;
const PASSWORD = process.env.pass;

interface Email {
  email: string;
  name: string;
  message: string;
}

const send = async ({ email, name, message }: Email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "google",
    auth: {
      user: USER,
      pass: PASSWORD,
    },
  });
  const mailOptions = {
    from: USER,
    to: USER,
    subject: `Message from ${email}`,
    text: `${name},\n${message}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) reject(error);
      else
        resolve(
          `Thank you, ${name}, for reaching out to me. I'll respond as soon as possible.`
        );
    });
  });
};

export default async function handler(req, res) {
  const fields = req.body;
  let error = "";

  const result = fields.reduce((messageObj: Email, field) => {
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

  if (error) res.status(406).send(error);
  else {
    await send(result)
      .then((answer) => {
        res.status(200).send(answer);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}
