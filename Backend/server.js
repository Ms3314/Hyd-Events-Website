import express from "express";
import adminRouter from "./routes/admin.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import UserRouter from "./routes/user.js";
const app = express();
dotenv.config()

app.use(cookieParser());
app.use(express.json());

//  defining the routes here
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", UserRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
