
import express from "express";
import adminRouter from "./routes/admin.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
// import ImageDetails from "./ImageDetails.js";
import userRouter from "./routes/user.js";




const app = express();


app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Define routes
// app.use("/api/v1/user");
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user" , userRouter);
 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




