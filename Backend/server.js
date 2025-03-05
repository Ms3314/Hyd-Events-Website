

import express from "express";
import adminRouter from "./routes/admin.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import userRouter from "./routes/user.js";
const app = express();
const allowedOrigins = ["https://hyd-events-website-admin.onrender.com"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies & authentication headers if needed
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user" , userRouter);
 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




