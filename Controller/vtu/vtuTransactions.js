const axios = require('axios');
const { getWebToken } = require('../../utils');
const { vtudeductor } = require('./vtudeductor');

const username = process.env.VTU_USERNAME;
const password = process.env.VTU_PASSWORD;

const vtuAirtime = async (req, res) => {
    
    console.log(req.body.network);

    const username = process.env.VTU_USERNAME;
    const password = process.env.VTU_PASSWORD;
    const phone = req.body.phone;
    const network = req.body.network;
    const amount = req.body.amount;
    const demoamount = req.body.amount;
    const demonetwork = req.body.network;
    const demophone = req.body.phone;

 
    const demodata = ({
        "code":"success",
        "message":"Airtime successfully delivered",
        "data":
        {"network":demonetwork,"phone":demophone,"amount": demoamount,"order_id":"3100"}
    })

    

    try{
        // const data = await axios.get(
        //     `https://vtu.ng/wp-json/api/v1/airtime?username=${username}&password=${password}&phone=${phone}&network_id=${network}&amount=${amount}`
        // )

        const updateTransaction = await vtudeductor(req)

    //    console.log(res.data)

            
        if(/*data.code === "success" || */demodata.code === "success"){
            res.status(200).json({updateTransaction, demodata})
        }else{
            res.status(401).json('none')
        }
    } catch (error) {
    res.status(500).json({message: `${error}`})
    }


}
const vtuData = async (req, res) => {
    
    const username = process.env.VTU_USERNAME;
    const password = process.env.VTU_PASSWORD;
    const phone = req.body.phone;
    const network = req.body.network;
    const variation_id = req.body.variation_id;
    const demoamount = req.body.amount;
    const demonetwork = req.body.network;
    const demophone = req.body.phone;

    const demodata = ({
        "code":"success",
        "message":"Data successfully delivered",
        "data":{"network":demonetwork,"data_plan":"MTN Data 1GB (SME) – 30 Days","phone":demophone,"amount":demoamount,"order_id":"2443"}
    })

 

    try{
        // const data = await axios.get(
        //     `https://vtu.ng/wp-json/api/v1/data?username=${username}&password=${password}&phone=${phone}&network_id=${network}&variation_id=${variation_id}`
        // )

        const updateTransaction = await vtudeductor(req)

    //    console.log(res.data)

        if(/*data.code === "success" || */ demodata.code === "success"){
            res.status(200).json({updateTransaction, demodata})
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
    const democustomer_id = req.body.customer_id;
    const demoservice_id = req.body.service_id;
    

    const demodata = ({
        
            "code":"success",
            "message":"Customer details successfully retrieved",
            "data":
            {"customer_id":democustomer_id,
            "customer_name":"FIRSTNAME LASTNAME",
            "customer_address":"10 Example Street, Town, State",
            "customer_arrears":"0.00",
            "decoder_status":null,"decoder_due_date":null,"decoder_balance":null}
        })


    try{
        // const data = await axios.get(
        //     `https://vtu.ng/wp-json/api/v1/verify-customer?username=${username}&password=${password}&customer_id=${customer_id}&service_id=${service_id}&variation_id=${variation_id}`
        //     )
 //   console.log(res.data)

        if(/*data.code === "success" || */demodata.code === "success"){

            res.status(200).json(demodata)
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
    const demophone = req.body.phone;
    const demoservice_id = req.body.service_id;
    const demovariation_id = req.body.variation_id;
    const demosmartCard_number = req.body.smartCard_number;

    const demodata = ({
        "code":"success",
        "message":"Cable TV subscription successfully delivered",
        "data":{
            "cable_tv":"GOtv",
            "subscription_plan":"GOtv Max",
            "smartcard_number":demosmartCard_number,
            "phone":demophone,
            "amount":"NGN3280",
            "amount_charged":"NGN3247.2",
            "service_fee":"NGN0.00",
            "order_id":"2876"
        }})

    try{
        // const data = await axios.get(
        //     `https://vtu.ng/wp-json/api/v1/tv?username=${username}&password=${password}&phone=${phone}&service_id=${service_id}&smartcard_number=${smartCard_number}&variation_id=${variation_id}`
        //     )
    //  console.log(res.data)

        if(/*data.code === "success" || */demodata.code === "success"){

            const updateTransaction = await vtudeductor(req)

            res.status(200).json({updateTransaction, demodata})
        }else{
            res.status(401).json(data)
        }
    } catch (error) {
        res.status(500).json({message: `${error}`})
    }

}


module.exports = { vtuAirtime, cableTV, verifyCustomer, vtuData }