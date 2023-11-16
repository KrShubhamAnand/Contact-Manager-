const Contact = require('../models/contactModels');

const createContact = async(req,res)=>{
    try{
        const contactData = new Contact(req.body);
        console.log(req.body);
        const insertData = await contactData.save();
        res.status(201).send(insertData);
    }catch(err){
        res.status(400).send(err);
    }
}

const getContact = async(req,res)=>{
    try{
        const getData = await Contact.find({user_id: req.user.id});
        res.status(200).send(getData);
    }catch(err){
        res.status(400).send(err);
    }
 }

const getContactByid = async(req,res)=>{
    try{
        const _id = req.params.id;
        const getDatabyId = await Contact.findById(_id);
        res.status(200).send(getDatabyId);
    }catch(err){
        res.status(400).send(err);
    }
}

const updateContact = async(req,res)=>{
   try{
       const _id = req.params.id;
       const patchDataById = await Contact.findByIdAndUpdate(_id,req.body,{new:true});
       res.status(200).send(patchDataById);
   }catch(err){
       res.status(400).send(err);
   }
}

const deleteContact = async(req,res)=>{
    try{
       const _id = req.params.id;
       const deleteDataById = await Contact.findByIdAndDelete(_id);
       res.status(200).send(deleteDataById);
    }catch(err){
       res.status(400).send(err);
    }
}

module.exports = {
    getContact,
    createContact,
    getContactByid,
    updateContact,
    deleteContact
}