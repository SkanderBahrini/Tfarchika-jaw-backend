const express = require('express')

const router = express.Router();

import * as outdoorController from '../controllers/outdoorController'



//post
router.route('/outdoor').post(outdoorController.createActicity);

//get

router.route('/outdoor').get(outdoorController.getActivity);

//GET FILTER

router.route('/outdoor/filter').get(outdoorController.getAcivityfilter);


module.exports = router;