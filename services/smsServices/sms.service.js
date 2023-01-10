const axios = require('axios')
const ejs = require('ejs')

const signupSuccessSMS = async (userNumber, username) => {
    const url = new URL(
        `https://www.bulksmsnigeria.com/api/v2/sms/create`
    );

    const body = await ejs.renderFile(
        'views/sms/signupSuccessSMS.ejs',
        {username: username}
    )

    const params = {
        "api_token": process.env.BULKSMS_API_KEY,
        "to": userNumber,
        "from": "Purscliq",
        "body": body,
        "gateway": "0",
        "append_sender": "0",
    };

    // console.log({data: params.body})
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    try {
        const sendSMS = await axios.post(
            url,
        )
        return sendSMS

    } catch (error) {
        if (error.response) {
            console.log({ errorResponse: error.response })
        } else if (error.request) {
            console.log({ errorRequest: error.request })
        } else {
            console.log({ error })
        }
    }
}



module.exports = { signupSuccessSMS }