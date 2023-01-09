const { User } = require('../../models')


const toggleUserActiveStatus = async (req, res) => {
    const userId = req.params.userId;
    const user = await User.getUserById(userId)

    if (!user) {
        return res.status(404).json('User not found')
      }

    const activeStatus = user.isActive == false ? true : false

    try {
        const changeActiveStatus = await User.findOneAndUpdate(
            { user },
            { isActive: activeStatus },
            { new: true }
        )
        const userStatus = {
            username: changeActiveStatus.username,
            email: changeActiveStatus.email,
            isactive: changeActiveStatus.isActive,
        }
        return res.status(200).json({ userStatus })

    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = { toggleUserActiveStatus };

