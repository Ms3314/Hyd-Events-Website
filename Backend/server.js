import express from "express";
import adminRouter from "./routes/admin.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import UserRouter from "./routes/user.js";
import cors from 'cors'
const app = express();
dotenv.config()



app.use(cors())
app.use(cookieParser());
app.use(express.json());

//  defining the routes here
app.get("/" , (req , res) => {
    res.json({
        message : "hello world"
    })
})
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", UserRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
