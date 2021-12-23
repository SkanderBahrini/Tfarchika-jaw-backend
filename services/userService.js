import User from '../models/userModel';

const mongoose = require('mongoose');

const  User = require('../models/userModel');


//Register

const registerNewuser = async(payload) => await User.create({...payload});

//login

const loginTheuser = async(payload) => await User.findOne( {...payload})



export{registerNewuser, loginTheuser}