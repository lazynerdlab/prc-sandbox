const axios = require('axios');




    

const vtubalance = (req) =>{

    const username = process.env.VTU_USERNAME;
    const password = process.env.VTU_PASSWORD;
    const balance = 2000

    res.status(200).json({data: balance}) 

    try {   
            const data = axios.get(
                `https://vtu.ng/wp-json/api/v1/balance?username=${username}&Frank&password=${password}`
                )
        //   console.log(res.data);

            if(data.code === "success"){
                res.status(200).json(data)
            }else{
                res.status(401).json(data)
            }
    } catch (error) {
        res.status(500).json({message: `${error}`})
    }
    
} 


module.exports = {vtubalance}