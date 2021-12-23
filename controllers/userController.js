
import User from '../models/userModel';
import * as userService from'../services/userService'

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');

// register

const registerUser = async(req,res) => {

    try {
       
 
         req.body.password = await bcrypt.hash(req.body.password, 12);
        const response = await userService.registerNewuser(req.body)

        res.status(201).send({message:"welcome to tfarchika jaw ", response})
        
    } catch (error) {

        res.send(error)
        
    }
}

//login

const loginUser = async(req,res) => {

try {

       const response = await userService.loginTheuser(req.body.email, req.body.password)

       res.status(201).send({message: "welcome", response})
    
} catch (error
) {
    res.send(error)
    
}
}




export{ registerUser, loginUser}
