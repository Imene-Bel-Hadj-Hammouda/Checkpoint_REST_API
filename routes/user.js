const express=require('express')
const router = express.Router()
const UserModel= require('../models/User')

router.post('/user',(req,res)=>{
    const {firstname,lastname,email,password}=req.body
    const newUser= new UserModel({
        firstname,
        lastname,
        email,
        password
    })
    newUser.save()
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))

})

router.get('/user',(req,res)=>{
    UserModel.find()
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json({errors:[{msg:err}]})) 
})

router.delete('/user/:id',(req,res)=>{
    console.log('deleting')
    UserModel.findByIdAndDelete(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json({errors:[{msg:err}]}))
})

router.put('/user/:id',(req,res)=>{
    
    UserModel.findByIdAndUpdate(req.params.id,req.body)
    .then(user=>res.status(200).json(user))
    .catch((err)=>res.status(400).json({errors:[{msg:err}]}))
})

module.exports=router