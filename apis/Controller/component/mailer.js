const User =  require('../../models/user');
const api_key = "63904ddf079ad98962f932620b235f65-48c092ba-eaa2bbd7";
const jwt = require('jsonwebtoken');
/*process.env.MAIL_GUN_SEC_KEY;*/
const domain = process.env.MAIL_GUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});



const registerMail = async (req,res)=>{

try{


    const userVerify = await User.findOne({email: req.email}) 
      !userVerify && res.status(401).json('no user with this email')
        
    const token = jwt.sign({_id: userVerify._id}, process.env.PASSSEC, {expiresIn:"600sec"})
      
      var data = {
        from: 'noreply@mail.com',
        to: req.email,
        subject: 'Verify Your Mail',
        text: `<P> Click the link below, to verify your account</p><br>
                <p>http://localhost:3000/userauth/?.${req.email}/#.${token}</p>`
      }
 

      mailgun.messages().send(data, function (error, body) {
        res.status(203).json('sent')
        console.log(body);
      });


  }catch(err){
            console.log(err);
            res.status(500);
          }
}




const verifyPasswordMail = async (req,res)=>{

try{
    const token = jwt.sign({_id: userPassword._id}, process.env.PASS_RESET_KEY, {expiresIn:"7d"})

    const userPassword = await User.findOne({email: req.body.email}) 
      !userPassword && res.status(401).json('no user with this email')
      
      
      
      var data = {
        from: 'noreply@mail.com',
        to: req.body.email,
        subject: 'RESET YOUR PASSWORD',
        text: `<P> Click the link below, to reset your password</p><br>
                <p>http://localhost:3000/passwordreset/${email}/${token}</p>`
      }
 

      mailgun.messages().send(data, function (error, body) {
        res.status(201).json({body})
      });


  }catch(err){
            console.log(err);
            res.status(500);
          }
}

module.exports = {verifyPasswordMail, registerMail}