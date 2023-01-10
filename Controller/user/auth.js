
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const { userIdDigit, getWebToken } = require('../../utils');
const { User } = require('../../models');
const { signupSuccessEmail, signupSuccessSMS } = require('../../services');
const { userService } = require('../../services')

// sign up new user
const signup = async (req, res) => {

  //check if email exist in the DB
  const findEmail = await User.findOne({ email: req.body.email })
  if (findEmail) { return res.status(401).json({ message: 'Mail already exist' }); }

  //check if username exist in the DB
  const findUser = await User.findOne({ username: req.body.username })
  if (findUser) { return res.status(401).json({ message: 'Username already exist' }); }

  //Generate userId with random number
  const newDigit = await userIdDigit()

  // create new instance of user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    userId: newDigit
  })

  try {

    // save the new user to the DB
    const saveUser = await newUser.save();
    // signupSuccessEmail(req, res);
    console.log({ saveUser })

    // signupSuccessSMS(2349015667067, saveUser.username)
    res.status(201).json(saveUser);

  } catch (err) {
    res.status(500).json({ message: `${err}` });
  }

};


const login = async (req, res) => {
  try {

    // get user info
    // const user = await User.findOne({ email: req.body.email })
    const user = await userService.getUserByEmail(req.body.email )

    const passwordisCorrect = await user.comparePassword(req.body.password)
    if (!user || !passwordisCorrect) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    // set user isloggedIn state to tru in db
    const userUpdate = await User.findOneAndUpdate({ email: req.body.email }, { isLoggeIn: true });
    if (!userUpdate) { return res.status(403).json({ message: 'User not logged in' }) }
    console.log(userUpdate);


    const email = userUpdate.email;
    const id = userUpdate.userId

    //sign access token to 
    const accessToken = jwt.sign({ email, id }, process.env.JWT_SEC);
    const refreshAccessToken = jwt.sign({ email, id }, process.env.JWT_SEC);


    const { password, isLoggeIn, isSuperAdmin, isApproved, isActive, DOB, BVN, ...response } = user._doc;
    // const { password,  ...others } = user._doc;


    res.status(200).header('access-token').json({ ...response, accessToken, refreshAccessToken });

  } catch (err) {
    res.status(500).json({ message: `error: ${err}` });
  }
}

// log the user out
const logout = async (req, res) => {

  const info = await getWebToken(req)
  const senderId = info.id;
  console.log(senderId);

  //  set is logged in status to false in db
  const logoutUser = await User.findOneAndUpdate({ userId: senderId }, { isLoggeIn: false });
  res.status(200).json(`${logoutUser.username} logged out`)

  if (!logoutUser) {
    return res.json(403).json({ message: 'failed to you logout' });
  }
}


module.exports = { signup, login, logout };