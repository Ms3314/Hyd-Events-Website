

import express from "express";
import adminRouter from "./routes/admin.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import userRouter from "./routes/user.js";
const app = express();
const port = process.env.PORT || 3000 ; 

const allowedOrigins = [
  "https://hyd-events-website-admin.onrender.com",
  "https://hydevents-main.onrender.com",
  "https://hyd-events-website.onrender.com",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  // ✅ Handle OPTIONS requests properly
  if (req.method === "OPTIONS") {
    res.status(204).end();  // 🔴 This must include CORS headers
    return;
  }

  next();
});

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user" , userRouter);
 
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});




