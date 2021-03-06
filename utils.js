import nodemailer from "nodemailer";
// import mg from "nodemailer-mailgun-transport";

export const generateSecret = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return String(randomNumber);
};

const sendMail = (email) => {
  const options = {
    service: "naver",
    host: "smtp.naver.com",
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
    from: "rlawpgud86@naver.com",
    to: address,
    subject: "๐Login Secret for ์๋ณด์นด๋talk!!๐",
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
//     body: "๊น์ ํ ๋ฌธ์ ์ธ์ฆ ํ์คํธ",
//     from: "+15078655787",
//     to: "+8201082768802",
//   })
//   .then((message) => console.log(message.sid, "์ฑ๊ณต"));

export const changeCategoryName = (category) => {
  //TO be : VN ๋ฒ์ ๋ํด์ผํจ
  if (category === "์ผ/์ง์") {
    return "Job";
  }
  if (category === "์ง๋ฌธ") {
    return "Question";
  }
  if (category === "ํผ๋ถ ๋ฏธ์ฉ") {
    return "Beauty";
  }
  if (category === "์ถ์ฐ/์ก์") {
    return "Childcare";
  }
  if (category === "๋๋ค ์ ๋ณด") {
    return "Neighborhood Info";
  }
  if (category === "์ฐ์ /๊ฒฐํผ") {
    return "Love";
  }
  if (category === "์๋ฆฌ/์์") {
    return "Food";
  }
  if (category === "์ผ์") {
    return "Daily Life";
  }
  if (category === "์ผ๋ฐ/๊ธฐํ") {
    return "General";
  }
  return category;
};
