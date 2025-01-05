import { CheckEmailPass } from "../middleware/Authmiddleware";

const {Router} = require("express");
const AuthController = require("../controllers/AuthenticationCont")


adminRouter.route('/signin').post( CheckEmailPass, AuthController.LoginAdmin)
adminRouter.route('/signup').post(AuthController.RegisterUser)
adminRouter.route('/event') 
export default adminRouter
