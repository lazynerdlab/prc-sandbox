const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser =require('body-parser');
const app = express();
const ejs = require('ejs')

const router = require('./routes/')
const { handle404Error, handleServerError } = require('./middleware/error.middleware')

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connected'))
.catch((err) => {
 console.log({message: err});    
});

// View engine
app.set('view engine', 'ejs')

app.use(express.json());

app.use(bodyParser.json({limit:"30mb", extended: true}));

// Router
app.use('/api', router);
app.use(handle404Error, handleServerError)


app.listen( process.env.PORT || 7000, ()=>{
   console.log('tested');
});

