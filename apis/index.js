const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes');
const app = express();

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connected'))
.catch((err) => {
 console.log(err);    
});


app.use(express.json());

app.use('/api', router)

 app.listen(7000, ()=>{
    console.log('tested');
 });

