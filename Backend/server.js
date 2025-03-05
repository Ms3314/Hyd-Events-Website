

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

  // ✅ Always set CORS headers (even if origin is undefined)
  if (!origin || allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*"); // Allow requests without an origin
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  // ✅ Fix OPTIONS preflight response (must include headers)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
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




