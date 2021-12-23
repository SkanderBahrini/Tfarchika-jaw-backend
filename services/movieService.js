
const Movie = require('../models/Moviemodel');
const mongoose= require('mongoose');

//service create
const createNewMovie = async (payload ) => await Movie.create({...payload})
// service display list of movies
const getMovielist = async() => await Movie.find()
// service get movie by filter
const getMovielistbyTime = async (payload)=> await Movie.find({...payload})

// find id

const getMoviebyid = async(payload) => await Movie.findById({...payload})

export  { createNewMovie, getMovielist, getMovielistbyTime, getMoviebyid}