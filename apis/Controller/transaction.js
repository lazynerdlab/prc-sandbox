const changeBalance = require("./component/changeBalance")


const transaction = (req, res) => {

    changeBalance(req, res);
    

}


module.exports = {transaction}