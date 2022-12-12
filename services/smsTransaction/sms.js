const axios = require('axios')

const sendSMS = async () => {
    const url = `https://www.bulksmsnigeria.com/api/v1/sms/create?
    api_token=U8lg0PsifZsSwPg2bSJQpEhgg3sgAp2GvcZW09tlat4ZqvxgAiBKs262q1Kq
    &from=BulkSMS.ng&to=2348145338797&body=Testing the sms api feature`

    const send = await axios.post(url)
    console.log(send)
    return send
    
    // try {
    //     const send = await axios.post(url)
    //     console.log(send)
    //     return send
        
    // } catch (error) {
    //     if (error.response) {
    //         console.log({error: error.response})
    //     } else if (error.request) {
    //         console.log({error: error.request})
    //     } else {
    //         console.log({error})
    //     }
    // }
    
        
//     fetch(url, {
//         method: "POST",
//         headers,
//     }).then(response => { 
//         response.json()
//         console.log(response)
//     });

}

const verificationSMS = async (userNumber, body) => {
    const url = new URL(
        `https://www.bulksmsnigeria.com/api/v2/sms/create`
    );
    
    const params = {
        "api_token":"U8lg0PsifZsSwPg2bSJQpEhgg3sgAp2GvcZW09tlat4ZqvxgAiBKs262q1Kq",
        "to": userNumber,
        "from": "Purscliq",
        "body": body,
        "gateway": "0",
        "append_sender": "0",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    
    try {
        const authKey = "U8lg0PsifZsSwPg2bSJQpEhgg3sgAp2GvcZW09tlat4ZqvxgAiBKs262q1Kq"
        const send = await axios.post(
            url,
            // {headers:{'Authorization': `Bearer ${authKey}`}}
        )
        console.log(send)
        return send
        
    } catch (error) {
        if (error.response) {
            console.log({errorResponse: error.response})
        } else if (error.request) {
            console.log({errorRequest: error.request})
        } else {
            console.log({error})
        }
    }
    
            
}

const body = 'Welcome to pursqcliq'
verificationSMS(2348145338797, body)

module.exports = { sendSMS, verificationSMS }