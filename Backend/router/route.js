// routes/userRoutes.js
import { Router } from "express";
import * as controller from '../controllers/appControllers.js';
import Auth , {localVariable} from "../middleware/auth.js";
const router = Router();

// POST
router.route('/register').post(controller.register);
router.route('/login').post(controller.verifyUser, controller.login);
router.route('/authenticate').post((req, res) => res.end());

// GET
router.route('/user/:username').get(controller.getUser);
// Remove the unused routes:
router.route('/generateOTP').get(controller.verifyUser , localVariable , controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);


// PUT

//pass user id to update data:)
router.route('/updateuser').put(Auth , controller.updateUser);
router.route('/resetPassword').put(controller.resetPassword);

export default router;
