const User = require("../../models/user");


const checkLoggedIn = async (req, res, next) =>{

    const webToken = req.headers.authorization;
    const webTokenResult = webToken.split(' ')[1];

    const info = jwt.verify(webTokenResult, process.env.JWT_SEC);

    console.log(info.userId)
    try {
        
   
    const userInfo = await User.findOne({userId: info.userId});

    if(userInfo.isLoggeIn === true){
        next();
    }else{
        return {message: 'not logged in'}
    }


} catch (error) {
        
    res.status(501).json({message: `error ${error}`})
}

}    