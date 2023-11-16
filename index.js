const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const contactRoute = require('./routes/contactRoutes');
const userRoute = require('./routes/userRoutes');
require('./config/dbConnect');

app.use(express.json());
app.use('/api/contacts',contactRoute);
app.use('/api/users',userRoute);



app.listen(port,()=>{
    console.log(`Server is listening successfully at port ${port}`);
})