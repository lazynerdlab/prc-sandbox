const { User } = require('../../models');
const { getWebToken } = require('../../utils');


const getUserBalance = async (req, res) => {
    const verifyJWT = await getWebToken(req);
    const checkerEmail = verifyJWT.email;

    try {
        const userBalance = await User.findOne({ email: checkerEmail });
        const viewBalance = userBalance.balance

        res.status(200).json(viewBalance);

    } catch (error) {
        console.log({ error })
        res.status(401).json(error);
    }
}


module.exports = { getUserBalance }