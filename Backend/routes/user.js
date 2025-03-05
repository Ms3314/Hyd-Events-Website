import express from 'express';
import {UserController}  from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.route("/events").get(UserController.AllEvents)
userRouter.route("/org").get(UserController.AllOrgs)

// we will alse send some info about the organization also 
userRouter.route("/event/:eventid").get(UserController.FindEvent)
userRouter.route("/org/:orgid").get(UserController.FindOrgWithEvents)
export default userRouter

