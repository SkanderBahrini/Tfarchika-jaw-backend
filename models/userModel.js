const mongoose = require('mongoose');

const validator = require('validator')


const user = mongoose.Schema({

  username:{
      
    type:String,
    required: true,
    unique:true

  },
    email:{
      
    type:String,
    required: true,
    unique:true,
 


  },
    password:{
      
    type:String,
    required: true,
    unique:true

  }
})


const User = mongoose.model('user', user);


module.exports=User;

