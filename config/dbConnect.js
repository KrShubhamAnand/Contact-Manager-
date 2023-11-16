const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myContacts_backend')
.then(()=>{
    console.log('Connected to database!')
})
.catch((err)=>{
    console.log('Failed to connect!');
    console.log(err);
})