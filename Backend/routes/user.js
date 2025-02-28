import express from 'express';
import {UserController}  from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.route("/events").get(UserController.AllEvents)
// we will alse send some info about the organization also 
userRouter.route("/event/:eventid").get(UserController.FindEvent)

export default userRouter