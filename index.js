import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/dbconnection.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;

//api'connect
app.use('/api/v1/user',userRoute)
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port ${PORT}`);
});

