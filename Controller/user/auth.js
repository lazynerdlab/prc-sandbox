
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const { userIdDigit } = require('../../utils');
const { User } = require('../../models');
const { signupSuccessEmail, signupSuccessSMS } = require('../../services');



const signup = async (req, res) => {
  const findEmail = await User.findOne({ email: req.body.email })
  if (findEmail) { return res.status(401).json({ message: 'Mail already exist' }); }

  const findUser = await User.findOne({ username: req.body.username })
  if (findUser) { return res.status(401).json({ message: 'Username already exist' }); }

  const newDigit = await userIdDigit()

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSSEC).toString(),
    isverified: false,
    userId: newDigit
  })

  try {
    const saveUser = await newUser.save();
    // signupSuccessEmail(req, res);
    console.log({ saveUser })

    signupSuccessSMS(2349015667067, saveUser.username)
     res.status(201).json(saveUser);

  } catch (err) {
    res.status(500).json({message: `${err}`});
  }

};


const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).json(
        {
          message: 'Email or password is incorrect'
        });
    }

    const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSSEC)
    const logpassword = hashPassword.toString(CryptoJS.enc.Utf8);
    const userUpdate = await User.findOneAndUpdate(req.body.email, { isLoggeIn: true });

    if (!userUpdate) { return res.status(403).json({ message: 'User not logged in' }) }

    console.log(userUpdate);

    if (!user || (logpassword !== req.body.password)) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const { password, ...others } = user._doc;
    const email = others.email;
    const id = others.userId
    const accessToken = jwt.sign({ email, id }, process.env.JWT_SEC);
    const refreshAccessToken = jwt.sign({ email, id }, process.env.JWT_SEC);

    res.status(200).header('access-token').json({ others, accessToken, refreshAccessToken });

  } catch (err) {
    res.status(500).json({ message: `error: ${err}` });
  }
}


const logout = async (req, res) => {
  const webToken = req.headers.authorization;
  const webTokenResult = webToken.split(' ')[1];
  const info = jwt.verify(webTokenResult, process.env.JWT_SEC);
  const senderId = info.id;

  const logoutUser = await User.findOneAndUpdate({ userId: senderId }, { isLoggeIn: false });

  if (!logoutUser) {
    return res.json(403).json({ message: 'failed to you logout' });
  }
}


module.exports = { signup, login, logout };