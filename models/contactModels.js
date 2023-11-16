const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"User"
   },

   name:{
    type: String,
    required: true
   },
   email:{
    type: String,
    required: true,
    unique: true
   },
   phone:{
    type: String,
    required: true,
   },
  
},
   {
    timeStamps: true,
   });

const Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;