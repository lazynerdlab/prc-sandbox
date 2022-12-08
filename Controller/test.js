const {testo} = require("./testo");



const test = (req,res) => {

      

   // const surname  = `${username} jm`;

    //console.log(surname)

   
    const another = testo.name;
    const userna = testo.usernam;
    


    res.status(201).json(`${another} and ${userna}`)    

   
}

module.exports = {test};

