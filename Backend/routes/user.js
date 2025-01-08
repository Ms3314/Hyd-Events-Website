import express from 'express';
import { UserController } from '../controllers/UserControllers';
const UserRouter = express.Router();

UserRouter.route('/event').get(UserController.DisplayAllEvents)
UserRouter.route('/eventbyorg').get(UserController.DisplayEventByOrg)
UserRouter.route('/org').get(UserController.DisplayOrganizationDetail)

export default UserRouter ; 
