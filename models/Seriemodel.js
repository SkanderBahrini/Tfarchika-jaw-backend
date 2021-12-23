const mongoose = require('mongoose');

const serie = mongoose.Schema({

    name: String,
    time: String,
    platform: String,
    date: String,
    genre: String,
    image:String,
    occasion: String

})


const Serie = mongoose.model('Serie',serie);

module.exports=Serie;