const mongoose = require('mongoose')

const outdoor = mongoose.Schema({

    name:String,
    image:String,
    place:String,
    price: String,
    occasion: String
})

const Outdoor = mongoose.model('outdoor', outdoor)

module.exports=Outdoor;