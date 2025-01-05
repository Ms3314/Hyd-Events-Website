import { CheckEmailPass, CheckTokenExist } from "../middleware/Authmiddleware";
const express = require('express');
const adminRouter = express.Router();
const AuthController = require("../controllers/AuthenticationCont")
const EventController = require("../controllers/EventController")

adminRouter.route('/signin').post( CheckEmailPass, AuthController.LoginAdmin)
adminRouter.route('/signup').post(AuthController.RegisterUser)
adminRouter.route('/event').post(CheckTokenExist , EventController.EventAddAdmin)
export default adminRouter
