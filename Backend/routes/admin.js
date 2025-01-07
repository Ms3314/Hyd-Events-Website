import express from 'express';
import { CheckEmailPass, CheckTokenExist } from '../middleware/Authmiddleware.js';
import {AuthController} from '../controllers/AuthenticationCont.js';
import {EventController} from '../controllers/EventController.js';
const adminRouter = express.Router();


adminRouter.route('/signin').post( CheckEmailPass, AuthController.LoginAdmin)
adminRouter.route('/signup').post(AuthController.RegisterUser)
adminRouter.route('/event').post(CheckTokenExist , EventController.EventAddAdmin).get(CheckTokenExist , EventController.DisplayEvents).delete(CheckTokenExist , EventController.DeleteOneEvent)
export default adminRouter
