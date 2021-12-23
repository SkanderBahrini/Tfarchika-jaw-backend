import { Router } from "express";
const router = Router();
import * as SerieController from '../controllers/serieController'


console.log('serie', SerieController)

//router post
router.route('/serie').post(SerieController.createSerie)

// router get
router.route('/serie').get(SerieController.getSerie)

//router get filter
router.route('/serie/filter').get(SerieController.getSerietime)






export default router;