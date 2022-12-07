const axios = require('axios');

const username = process.env.VTU_USERNAME;
const password = process.env.VTU_PASSWORD;

const vtubalance = () =>{

    const data = axios.get(`https://vtu.ng/wp-json/api/v1/balance?username=${username}&Frank&password=${password}`)
    console.log(res.data);
} 


module.exports = {vtubalance}