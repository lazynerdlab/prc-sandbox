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
        "api_token": "U8lg0PsifZsSwPg2bSJQpEhgg3sgAp2GvcZW09tlat4ZqvxgAiBKs262q1Kq",
        "to": userNumber,
        "from": "Purscliq",
        "body": body,
        "gateway": "0",
        "append_sender": "0",
    };

    console.log({data: params.body})
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    try {
        const authKey = "U8lg0PsifZsSwPg2bSJQpEhgg3sgAp2GvcZW09tlat4ZqvxgAiBKs262q1Kq"
        const sendSMS = await axios.post(
            url,
            // {headers:{'Authorization': `Bearer ${authKey}`}}
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