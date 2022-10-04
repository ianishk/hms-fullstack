const express=require('express');
const mongoose=require('mongoose');
const connectDB =require('./config/db');
const bodyParser = require("body-parser")

connectDB();

const app = express();

app.use(express.json({extended:false}))
// app.use(bodyParser.json())

app.get('/',(req,res)=>res.send('API RUNNING'));

//defining routes
app.use('/api/receptionist',require('./controllers/receptionistControllers'));


app.use('/api/rooms',require('./controllers/roomController'));
app.use('/api/queries',require('./controllers/queryController'));

app.use('/api/medicine',require('./controllers/medicineControllers'));
app.use('/api/doctor',require('./controllers/doctorControllers'));

const port = process.env.PORT || 5000;

app.listen(port, () => { 
    console.log(`connected to port ${port}`)
})