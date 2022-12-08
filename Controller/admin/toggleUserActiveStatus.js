const User = require('../../models/user')

const toggleUserActiveStatus = async (req, res) => {
    const user = await User.findOne({userId: req.params.userId})
    const activeStatus = user.isActive == false ? true : false 

    try {
        const changeActiveStatus = await User.findOneAndUpdate(
            {userId: user.userId},
            {isActive: activeStatus},
            {new:true}
        )
        const userStatus = {
            username: changeActiveStatus.username,
            email: changeActiveStatus.email,
            isactive: changeActiveStatus.isActive,
        }
        return res.status(200).json({userStatus})
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {toggleUserActiveStatus};

