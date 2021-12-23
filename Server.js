import express  from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {router} from "express";
import movieroutes from './routes/Movieroute'
import serieroutes from './routes/serieRoute'
import outdoorroutes from './routes/outdoorRoute'
import userRoute from './routes/userRoute'

const dotenv= require('dotenv').config();


const app = express()

// middlewares
app.use(express.json())
app.use(cors())
// Routes 
app.use('/movies',movieroutes);
app.use('/series',serieroutes);
app.use('/outdoors',outdoorroutes);
app.use('/users', userRoute);

// database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

//server 3001
app.listen(3002, ()=>{

    console.log("we are connected")
})   