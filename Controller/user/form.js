const { User } = require("../../models");
const { getWebToken } = require("../../utils");


const form = async (req, res) => {

    console.log('hello');
    const verifyJWT = await getWebToken(req)
    const senderEmail = verifyJWT.email
    console.log(senderEmail)
    const email = senderEmail;
    const firstName = req.body.firstname;
    const middleName = req.body.middlename;
    const lastName =  req.body.lastname;
    const phoneNo =  req.body.phone;
    const adress =  req.body.adress;
  
    try {
        const updateUser = await User.findOneAndUpdate(
            { email: email }, 
            { firstName: firstName, middleName: middleName, lastName: lastName, phoneNo: phoneNo, adress: adress }
        );

        if (!updateUser) {
            return res.status(402).json(`${firstName} data not updated`);
        }

        res.status(201).json(`${firstName} data updated`);
    } catch (err) {
        res.status(401).json({ message: `${firstName} err: ${err}` });
    }
}


module.exports = { form }