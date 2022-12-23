const { User } = require('../models');
const jwt = require('jsonwebtoken');
const mailgun = require("mailgun-js");


const emailService = async (req, res) => {

  try {
    

    const DOMAIN = process.env.MAIL_GUN_DOMAIN;
    const api_key = process.env.MAIL_GUN_SEC_KEY;
    const MAILGUN_HOST = process.env.MAILGUN_HOST

    const mg = mailgun({ apiKey: api_key, domain: DOMAIN, HOST: MAILGUN_HOST });
      // const userVerify = await User.findOne({ email: req.body.email })
      // if(!userVerify) {
      //   return res.status(401).json({ message: 'no user with this email' })
      // }

      // const token = jwt.sign({ id: userVerify._id }, process.env.PASSSEC, { expiresIn: "1d" })

      const data = {
        from: 'me@samples.mailgun.org',
        to: req.body.email,
        subject: 'Verify Your Mail',
        text: `<P> Click the link below, to verify your account</p><br>
        <p>http://localhost:3000/userauth/${req.body.email}/</p>`
      };
    //  const body = mg.messages().send(data);
    //     if(!body){
    //       return  res.status(400).json({message: `no mail`})
    //     }
    //     console.log(body);
    //     res.status(200).json(body)

      
      mg.messages().send(data, function (error, body) {
        console.log(body);
        console.log(error);
        res.status(200).json(body)
      });
      

  } catch (error) {
    res.status(500).json({message: `${error}`})
  }

}


module.exports = {emailService}