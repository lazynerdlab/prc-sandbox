const { webToken } = require("../Controller/component/webToken");
const User = require("../models/user");



const verifyLoggedIn = async (req, res, next) =>{

    

    const info = await webToken(req)

    console.log(info.id)
    try {
        
   
    const userInfo = await User.findOne({userId: info.id});

    if(userInfo.isLoggeIn === true){
        next();
    }else{
        return {message: 'not logged in'}
    }


} catch (error) {
        
    res.status(501).json({message: `error ${error}`})
}

}    


module.exports = {verifyLoggedIn}