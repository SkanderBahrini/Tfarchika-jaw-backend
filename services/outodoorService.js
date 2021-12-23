const express = require('express');
const mogoose =require('mongoose');
const Outdoor = require('../models/Outdoormodel');
 
// create service
const createNewactivity = async(payload) => await Outdoor.create({...payload});
// get service
const getActivitylist = async() => await Outdoor.find();
 
//get service filter

const getAcitivitylistfilter = async(payload) => await Outdoor.find({...payload})


export {createNewactivity, getActivitylist, getAcitivitylistfilter}