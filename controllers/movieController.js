import * as MovieService from '../services/movieService'

const createMovie = async (req,res)=>{


  // post movie
    try {

    const response = await MovieService.createNewMovie(req.body)
   
      res.status(201).send({message:"movie created",  response})
    } catch (error) {
           console.log(error);
           res.send(error)
    }

   
}

//get movies 
const getMovie = async(req,res)=>{

 try {

  const response = await MovieService.getMovielist()
   res.send({message:"here is the list of Movies", response})
 } catch (error) {
        
     res.send(error)
 } }
 //get movies from filter time

 const getMovietime = async(req,res) => {

 try {

    
   const response = await MovieService.getMovielistbyTime(req.body)
  res.status(201).send({message: "Movie that correspond to time", response})
  console.log(response)
 } catch (error) {
     
      res.send(error)
 } }

 // get by id

 const getMovieid = async(req,res) => {

  try {
    
    const response = await MovieService.getMoviebyid(req.body)

    res.status(201).send({message:"Movie found", response })
  } catch (error) {
      res.send(error)
  }
 }




export { createMovie , getMovie, getMovietime, getMovieid}

