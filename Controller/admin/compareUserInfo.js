const { User, FlutterWave } = require('../../models')

const compareUserInfo = async (req, res) => {
    /* Fetches user details from the user model and fllutterwave model for manual comparison */
    const userId = req.params.userId;
    console.log({userId})
    const selectFields = 'username userId firstName middleName lastName phoneNo email'
    try {
        // Promise.all for parallel db operations
        const [user, flutterWaveUser] = await Promise.all([
            User.getUser(userId, selectFields),
            FlutterWave.findOne({ userId })
        ])

        const data = {
            user,
            flutterWaveUser
        }

        return res.status(200).json({ data })
    } catch (error) {
        console.log({error})
        res.status(400).json({ error })
    }
}

module.exports = { compareUserInfo }