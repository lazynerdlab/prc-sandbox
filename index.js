const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser =require('body-parser');
const app = express();
const router = require('./routes/_index')

const { sendSMS, verificationSMS } = require('./services/smsTransaction/sms')

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connected'))
.catch((err) => {
 console.log({message: err});    
});

// sendSMS()


app.use(express.json());

app.use(bodyParser.json({limit:"30mb", extended: true}));

// Router
app.use('/api', router);


 app.listen( process.env.PORT || 7000, ()=>{
    console.log('tested');
 });

