import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB.js';
//import accessRequestRoutes from './routes/accessRequest.routes.js';
import leadRoutes from './routes/leads.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests per IP in that window
  message: { message: "Too many requests, please try again later." }
});


dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}));
app.use(limiter);


// Connect to MongoDB
connectDB();

//app.use('/api/requests', accessRequestRoutes);
app.use('/api/leads', leadRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
  console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);
});
