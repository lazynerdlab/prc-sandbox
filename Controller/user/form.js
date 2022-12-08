const User = require("../../models/user");



const Form = async (req, res) =>{

    const email = req.body.email,
    firstName =req.body.firstName,
    middleName = req.body.middleName,
    lastName =  req.body.lastName
  
    try {

        const updateUser = await User.findOneAndUpdate({email: email},{firstName: firstName, middleName: middleName, lastName: lastName});

        if(!updateUser){
            return res.status(402).json(`${firstName} data updated`);
        }

        res.status(201).json(`${firstName} data updated`);
    } catch (err) {
        res.status(401).json({message: `${firstName} err: ${err}`});   
    }
    
    
}


module.exports = {Form}