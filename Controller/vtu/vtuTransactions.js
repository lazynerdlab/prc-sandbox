const axios = require('axios');
const { getWebToken } = require('../../utils');
const { vtudeductor } = require('./vtudeductor');

const username = process.env.VTU_USERNAME;
const password = process.env.VTU_PASSWORD;

const vtuAirtime = async (req, res) => {
    
    const username = process.env.VTU_USERNAME;
    const password = process.env.VTU_PASSWORD;
    const phone = req.body.phone;
    const network = req.body.network;
    const amount = req.body.amount;

    try{
        const data = await axios.get(
            `https://vtu.ng/wp-json/api/v1/airtime?username=${username}&password=${password}&phone=${phone}&network_id=${network}&amount=${amount}`
        )

        const updateTransaction = await vtudeductor(req, data)

    //    console.log(res.data)

        if(data.code === "success"){
            res.status(200).json(data, updateTransaction)
        }else{
            res.status(401).json(data)
        }
    } catch (error) {
    res.status(500).json({message: `${error}`})
    }


}


const verifyCustomer = async (req, res) => {
    
    const username = process.env.VTU_USERNAME;
    const password = process.env.VTU_PASSWORD;
    const customer_id = req.body.customer_id;
    const service_id = req.body.service_id;
    const variation_id = req.body.variation_id;
    

    try{
        const data = await axios.get(
            `https://vtu.ng/wp-json/api/v1/verify-customer?username=${username}&password=${password}&customer_id=${customer_id}&service_id=${service_id}&variation_id=${variation_id}`
            )
 //   console.log(res.data)

        if(data.code === "success"){

            res.status(200).json(data)
        }else{
            res.status(401).json(data)
        }
    } catch (error) {
    res.status(500).json({message: `${error}`})
    }

}


const cableTV = async (req, res) => {

    const username = process.env.VTU_USERNAME;
    const password = process.env.VTU_PASSWORD;
    const phone = req.body.phone;
    const service_id = req.body.service_id;
    const variation_id = req.body.variation_id;
    const smartCard_number = req.body.smartCard_number;
 





    try{
        const data = await axios.get(
            `https://vtu.ng/wp-json/api/v1/tv?username=${username}&password=${password}&phone=${phone}&service_id=${service_id}&smartcard_number=${smartCard_number}&variation_id=${variation_id}`
            )
    //  console.log(res.data)

        if(data.code === "success"){

            const updateTransaction = await vtudeductor(req, data)

            res.status(200).json(data, updateTransaction)
        }else{
            res.status(401).json(data)
        }
    } catch (error) {
        res.status(500).json({message: `${error}`})
    }

}


module.exports = { vtuAirtime, cableTV, verifyCustomer }