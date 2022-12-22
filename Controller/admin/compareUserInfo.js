const { User, FlutterWave } = require('../../models')

const compareUserInfo = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findOne({ userId })
        .exec()
        const flutterWaveUser = await FlutterWave.findOne({userId}).exec()
        const data = {
            user,
            flutterWaveUser
        }
        // console.log({ user })

        return res.status(200).json({ data })
    } catch (error) {
        // console.log({error})
        res.status(400).json({ error })
    }

    // try {
    //     const flutterWaveUser = await  FlutterWave.findOne(userId).exec()
    // } catch (error) {
    //     res.status(400).json({error})
    // }


}

module.exports = { compareUserInfo }