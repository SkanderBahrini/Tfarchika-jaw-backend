const Serie = require('../models/Seriemodel');
const mongoose = require('mongoose');
 
import * as serieService from '../services/serieService'

// create serie
const  createSerie = async(req, res) =>{

    try {

        const response = await serieService.createNewserie(req.body)

              res.status(201).send({message:"serie  added",  response})
        
    } catch (error) {

          console.log(error);
           res.send(error)
        
    }
}

// get serie
const getSerie = async(req,res)=>{

 try {

  const response = await serieService.getSerielist()
   res.send({message:"here is the list of Series", response})
 } catch (error) {
        
     res.send(error)
 } }

 //get serie by filter

 const getSerietime = async(req,res)=>{

 try {
      
  const response = await serieService.getSerielistBytime(req.body)
   res.send({message:"here is the list of Series according to your research", response})
 } catch (error) {
        
     res.send(error)
 } }

export {createSerie , getSerie, getSerietime}

