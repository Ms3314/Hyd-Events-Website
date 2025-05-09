import express from 'express';
import { CheckEmailPass, CheckTokenExist } from '../middleware/Authmiddleware.js';
import {AuthController} from '../controllers/AuthenticationCont.js';

import { EventController} from '../controllers/EventController.js';
import { miscController } from '../controllers/miscController.js';
import { orgController } from '../controllers/orgController.js';
import { UserController } from '../controllers/userController.js';

const adminRouter = express.Router();


adminRouter.route('/signin').post( CheckEmailPass, AuthController.LoginAdmin)
adminRouter.route('/signup').post(AuthController.RegisterUser)

adminRouter.route('/event').post(CheckTokenExist , EventController.EventAddAdmin).get(CheckTokenExist , EventController.EventsOfAdmin).delete(CheckTokenExist , EventController.EventDeleteByAdminOnly).put(CheckTokenExist , EventController.EventUpdateAdmin)
adminRouter.route('/org').get(CheckTokenExist , orgController.OrgDetail).put(CheckTokenExist ,orgController.ChangeOrgDetail )
adminRouter.route('/event/:eventid').get(CheckTokenExist , UserController.FindEvent)


adminRouter.route('/upload').post(CheckTokenExist , )
adminRouter.route('/checkToken').post(CheckTokenExist ,miscController.isValidToken)

export default adminRouter
