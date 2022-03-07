import nodemailer from "nodemailer";
// import mg from "nodemailer-mailgun-transport";

export const generateSecret = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return String(randomNumber);
};

const sendMail = (email) => {
  const options = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  };
  const nodemailerMailgun = nodemailer.createTransport(options);
  return nodemailerMailgun.sendMail(email, (err, info) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`Response: ${info}`);
    }
  });
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "rlapwgud86@gmail.com",
    to: address,
    subject: "🔒Login Secret for 아보카도talk!!🔒",
    html: `<h1>hello! your login secret is ${secret}.</h1>
    <h2>Copy paste on the web/app to Login</h2>`,
  };
  return sendMail(email);
};

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);

// export const sendSecretSMS = client.messages
//   .create({
//     body: "김제형 문자 인증 테스트",
//     from: "+15078655787",
//     to: "+8201082768802",
//   })
//   .then((message) => console.log(message.sid, "성공"));
