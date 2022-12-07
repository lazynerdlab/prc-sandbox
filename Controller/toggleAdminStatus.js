const User = require('../models/user')

const toggleAdminStatus = async (req, res) => {
    const user = await User.findOne({userId: req.params.userId})
    const adminStatus = user.isAdmin == false ? true : false 

    try {
        const changeAdminStatus = await User.findOneAndUpdate(
            {userId: user.userId},
            {isAdmin: adminStatus},
            {new:true}
        )
        const userStatus = {
            username: changeAdminStatus.username,
            email: changeAdminStatus.email,
            isAdmin: changeAdminStatus.isAdmin,
        }
        return res.status(200).json({userStatus})
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {toggleAdminStatus};

