import nodemailer from "nodemailer";
import Cookies from 'cookies';

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
    text: `Name: ${name},\n\n${message}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return reject(error);
      else
        return resolve(
          `Thank you, ${name}, for reaching out to me. I'll respond as soon as possible.`
        );
    });
  });
};

const handleEmail = async (fields) => {
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
          error += isValid ? "" : "Invalid email address format\n\n";
          break;
        case field.name === "name" || field.name === "message":
          isValid = field.value.length > 0;
          error += isValid
            ? ""
            : `No value provided for ${field.name} field\n\n`;
          break;
        default:
          break;
      }
      if (isValid) messageObj[field.name] = field.value;
    }
    return messageObj;
  }, {});

  if (error)
    return new Promise((resolve, reject) => {
      reject(error);
    });
  else {
    try {
      const message = await send(result);
      return new Promise((resolve, reject) => {
        resolve(message);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
};

export default async function handler(req, res) {
  const cookies = new Cookies(req, res);
  const uid = cookies.get('uid');
  
  if (!cookies.get('limit') && uid) {
    cookies.set('limit', uid, {
      maxAge: 120,
      sameSite: true,
      httpOnly: false,
      path: "/contact",
      secure: false
    })
  }
  
  switch (true) {
    case typeof cookies.get('limit') === 'string':
      res.status(406).json({message: "", error: "Sorry, you have sent too many request, try again later."})
    case req.method === "POST":
      await handleEmail(req.body)
        .then((message) => {
          res.status(200).json({ message, error: "" });
        })
        .catch((error) => {
          res.status(406).json({ message: "", error });
        });
      break;
    case req.method === "GET":
      res.status(500).send("No route for provided get method.");
  }
}
