const Serie = require('../models/Seriemodel');
const mongoose = require('mongoose');


const createNewserie = async(payload)=> await Serie.create({...payload})

const getSerielist = async() => await Serie.find()

const getSerielistBytime = async(payload) => await Serie.find({...payload})

export {createNewserie, getSerielist , getSerielistBytime}