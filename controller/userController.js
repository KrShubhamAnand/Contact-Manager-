const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async(req,res)=>{
   try{
      const {username,email,password}= req.body;
      if(!username,!email,!password){
        res.status(400);
        throw new Error("All fields are mandatory!");
      }
      const userAvailable = await User.findOne({email});
      if(userAvailable){
        res.status(400);
        throw new Error("User already exists!");
      }

      const hashPassword = await bcrypt.hash(password,10);
      console.log(`Hashed password is:- ${hashPassword}`);
      const user = await User.create({
        username,
        email,
        password: hashPassword
      });
      console.log(`User created ${user}`);
      if(user){
        res.status(201).send({_id: user.id, email: user.email});
      }
      else{
        res.status(400);
        throw new Error("User details is not valid!");
      }
   }catch(err){
        console.log(err);
   }
}

const loginUser = async(req,res)=>{
   const {email,password} = req.body;
   if(!email || !password){
    res.status(400);
    throw new Error ("All fields are mandatory!");
   }
   const user = await User.findOne({email});
   if(user && await bcrypt.compare(password,user.password)){
    const accessToken = jwt.sign({
      user:{
        username: user.username,
        email: user.email,
        id: user.id
      },
    }, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "15m"});
    res.status(200).send({accessToken});
   }
   else{
    res.status(401);
    throw new Error("Email or password is not valid!");
   }

}

const currentUser = async(req,res)=>{
    res.send(req.user);
}



module.exports = {registerUser,loginUser,currentUser};