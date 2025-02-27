import express from 'express';
import { CheckEmailPass, CheckTokenExist } from '../middleware/Authmiddleware.js';
import {AuthController} from '../controllers/AuthenticationCont.js';
import { EventController} from '../controllers/EventController.js';
import { miscController } from '../controllers/miscController.js';
const adminRouter = express.Router();


adminRouter.route('/signin').post( CheckEmailPass, AuthController.LoginAdmin)
adminRouter.route('/signup').post(AuthController.RegisterUser)
adminRouter.route('/event').post(CheckTokenExist , EventController.EventAddAdmin).get(CheckTokenExist , EventController.EventsOfAdmin).delete(CheckTokenExist , EventController.EventDeleteByAdminOnly)

adminRouter.route('/upload').post(CheckTokenExist , )
adminRouter.route('/checkToken').post(CheckTokenExist ,miscController.isValidToken)
export default adminRouter
