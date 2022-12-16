const axios = require('axios');

const username = process.env.VTU_USERNAME;
const password = process.env.VTU_PASSWORD;

const vtuAirtime = async (req, res) => {
    const phone = req.body.phone;
    const network = req.body.network;
    const amount = req.body.amount;

    const data = await axios.get(
        `https://vtu.ng/wp-json/api/v1/airtime?username=${username}&password=${password}&phone=${phone}&network_id=${network}&amount=${amount}`
    )

    console.log(res.data)
}


const cableTV = async (req, res) => {
    const phone = req.body.phone;
    const network = req.body.network;
    const amount = req.body.amount;

    const data = await axios.get(
        `https://vtu.ng/wp-json/api/v1/tv?username=${username}&password=${password}&phone=${phone}&service_id=${service}&smartcard_number=${smartCard}&variation_id=${variation}`
        )
    console.log(res.data)
}


module.exports = { vtuAirtime, cableTV }