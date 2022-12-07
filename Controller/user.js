
const User =  require('../models/user');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const {registerMail} = require('./component/mailer');
const userIdDigit = require('./component/userIdDigit');
const digitGenerator = require('crypto-secure-random-digit');


const Register =  async (req,res) =>{
  const findEmail = await User.findOne({email: req.body.email})
  if(findEmail) {return res.status(401).json({message: 'Mail already exist'});}

  const findUser = await User.findOne({username: req.body.username})
  if(findUser) {return res.status(401).json({message: 'Username already exist'});}

  let randomDigits = 0;

  const userIdDigit = async () =>{
     randomDigits = digitGenerator.randomDigits(10).join("");
    const checkId = await User.findOne({userId: randomDigits});
    if(checkId){
      userIdDigit();
       }
       return randomDigits;
    }


  userIdDigit();

 

 const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSSEC).toString(),
    isverified: false,
    userId: randomDigits
    
}
 )
 try{
    const saveUser = await newUser.save();
    registerMail(req, res);
    res.status(201).json(saveUser); 
 }catch(err){
    res.status(500).json(err); 
 }

};

const Login = async (req,res) => {


  try{
    const user = await User.findOne({email: req.body.email})
    if(!user) {return res.status(401).json({message: 'Email or password is incorrect'});}
    
    const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSSEC)  
    const logpassword = hashPassword.toString(CryptoJS.enc.Utf8);

    const userUpdate = await User.findOneAndUpdate(req.body.email, {isLoggeIn: true});
    if(!userUpdate) {return res.status(403).json({message: 'User not logged in'})}


    console.log(userUpdate);
  
    if( !user || (logpassword !== req.body.password)) {
      return res.status(401).json({ message: 'Email or password is incorrect'});
    } 

     const {password, ...others} = user._doc;
     const dataInfo = (others.email, others.userId) 
     const accessToken = jwt.sign(dataInfo, process.env.JWT_SEC,{expiresIn: '1d'});
     const refreshAccessToken = jwt.sign(dataInfo, process.env.JWT_SEC,{expiresIn: '10d'});

    //  res.status(200).json({others, accessToken, refreshAccessToken });
    //  const accessToken = jwt.sign(others, process.env.JWT_SEC,{expiresIn: '1d'})
    //  const refreshAccessToken = jwt.sign(others, process.env.JWT_SEC,{expiresIn: '10d'})
     res.status(200).header('access-token').json({ others, accessToken, refreshAccessToken });

  } catch(err){
    res.status(500).json({message: `error: ${err}`});
  }
}

module.exports = {Register, Login};