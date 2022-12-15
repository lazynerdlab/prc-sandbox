const User = require('../../models');
const jwt = require('jsonwebtoken');
const mailgun = require("mailgun-js");
const DOMAIN = process.env.MAIL_GUN_DOMAIN;
const api_key = '533048384d80e863c0a1e8e04ff04ecb-69210cfc-a017c0fe';
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });


const signupSuccessEMail = async (req, res) => {
  try {
    const userVerify = await User.findOne({ email: req.body.email })
    !userVerify && res.status(401).json({ message: 'no user with this email' })

    const token = jwt.sign({ id: userVerify._id }, process.env.PASSSEC, { expiresIn: "1d" })

    const data = {
      from: 'me@samples.mailgun.org',
      to: req.body.email,
      subject: 'Verify Your Mail',
      text: `<P> Click the link below, to verify your account</p><br>
      <p>http://localhost:3000/userauth/${req.body.email}/${token}</p>`
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });

  } catch (err) {
    res.status(500).json({ message: err });
  }
}


const verifyPasswordEmail = async (req, res) => {
  try {
    const userPassword = await User.findOne({ email: req.body.email })
    !userPassword && res.status(401).json({ message: 'no user with this email' })

    const token = jwt.sign(
      { _id: userPassword._id }, process.env.PASS_RESET_KEY, { expiresIn: "7d" })

    const data = {
      from: 'me@samples.mailgun.org',
      to: req.body.email,
      subject: 'RESET YOUR PASSWORD',
      text: `<P> Click the link below, to reset your password</p><br>
              <p>http://localhost:3000/passwordreset/${req.body.email}/${token}</p>`
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });

  } catch (err) {
    res.status(500).json({ message: err });
  }
}


const transactionSuccessEmail = async (req, res, newBalance) => {
  try {
    const userPassword = await User.findOne({ email: req.body.receiverEmail })
    !userPassword && res.status(401).json({ message: 'no user with this email' })

    if (req.body.type === "increase") {
      const data = {
        from: 'noreply@mail.com',
        to: req.body.email,
        subject: 'Transaction Information',
        text: `<P> You account has been credited</p><br>
                  <p>You received ${req.body.value} and your balance is/${newBalance}</p>`
      };
      
      mg.messages().send(data, function (error, body) {
        console.log(body);
      });

    } else if (req.body.type === "decrease") {

      const data = {
        from: 'noreply@mail.com',
        to: req.body.email,
        subject: 'Transaction Information',
        text: `<P> You account has been credited</p><br>
                <p>You received ${req.body.value} and your balance is/${newBalance}</p>`
      };
      mg.messages().send(data, function (error, body) {
        console.log(body);
      });

    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
}


module.exports = {
  signupSuccessEMail,
  verifyPasswordEmail,
  transactionSuccessEmail
}