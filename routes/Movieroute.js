const express= require('express');
const router = express.Router();
import * as MovieController from '../controllers/movieController'

console.log("movie",MovieController)

//create movies
router.route('/movie').post(MovieController.createMovie)

//get list of movies
router.route('/movie').get(MovieController.getMovie)

// get list of movies by time

router.route('/movie/filter').get(MovieController.getMovietime)
// get list of movies by id 

router.route('/movie/filterid').get(MovieController.getMovieid)
module.exports = router;

