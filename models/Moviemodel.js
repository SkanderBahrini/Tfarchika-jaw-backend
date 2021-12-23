const mongoose = require('mongoose');


const movie = mongoose.Schema({

    name:String,
    genre: String,
    time:String,
    image:String,
    date: String,
    occasion:String,
    platform: String
})

const Movie = mongoose.model('movie', movie);

module.exports=Movie;