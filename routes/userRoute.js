
const express = require('express')

const router = express.Router();



import * as userController from '../controllers/userController'

//Register

router.route('/register').post(userController.registerUser);

//login

router.route('/login').post(userController.loginUser)





export default router;