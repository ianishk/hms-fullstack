const express=require('express');
const mongoose=require('mongoose');
const connectDB =require('./config/db');
const bodyParser = require("body-parser")
const cors = require('cors')
connectDB();

const app = express();
app.use(cors())
app.use(express.json({extended:false}))
// app.use(bodyParser.json())

app.get('/',(req,res)=>res.send('API RUNNING'));

//defining routes
app.use('/api/receptionist',require('./controllers/receptionistControllers'));


app.use('/api/rooms',require('./controllers/roomController'));
app.use('/api/queries',require('./controllers/queryController'));
app.use('/api/patient',require('./controllers/patientControllers'));
app.use('/api/medicine',require('./controllers/medicineController'));
app.use('/api/doctor',require('./controllers/doctorControllers'));
app.use('/api/pharmacist',require('./controllers/pharmacistControllers'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`connected to port ${port}`)
})