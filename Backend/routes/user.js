import express from 'express';
import {UserController}  from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.route("/events").get(UserController.AllEvents)
userRouter.route("/event/:eventid").get(userRouter)

export default userRouter