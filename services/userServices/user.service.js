const { User } = require('../../models')

const getUserByEmail = async (email) => {
    return User.findOne({ email })
}



const deleteUserById = async(userId) => {
    const user = User.getUserById(userId)
    await user.remove();
    return user;
}


module.exports = {getUserByEmail, deleteUserById}