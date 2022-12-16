const { User } = require("../../models");
const { getWebToken } = require("../../utils");


const form = async (req, res) => {

    console.log('hello');
    const verifyJWT = await getWebToken(req)
    const senderEmail = verifyJWT.email

    const email = senderEmail;
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName =  req.body.lastName;
    const phoneNo =  req.body.phone;
  
    try {
        const updateUser = await User.findOneAndUpdate(
            { email: email }, 
            { firstName: firstName, middleName: middleName, lastName: lastName, phoneNo: phoneNo }
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