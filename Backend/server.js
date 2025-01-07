// import express from "express"
// import adminRouter from "./routes/admin.js";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// const app = express()

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected! to the database'));

  
// app.use(cookieParser())
// app.use(express.json());

// app.use("/api/v1/user")
// app.use("/api/v1/admin" , adminRouter)


// app.listen(3000 , ()=>{
//     console.log("connected at port 3000");
// })

import express from "express";
import adminRouter from "./routes/admin.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
const app = express();
dotenv.config()

app.use(cookieParser());
app.use(express.json());

// Define routes
// app.use("/api/v1/user");
app.use("/api/v1/admin", adminRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
