const mongoose=require('mongoose');
const validator=require('validator');

const userSchema= new mongoose.Schema({
    firstname:String,
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate : (value)=> validator.default.isEmail(value)
    },
    password:{
        type:String,
        required:true,
        validate: (value)=>validator.default.isLength(value,{min:6})
    }

})
module.exports= mongoose.model('user',userSchema)