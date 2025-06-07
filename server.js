import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = 4000

const allowedOrigins = [
  'https://food-delivery-frontend-git-main-ghanshyam-patidars-projects.vercel.app',
  'https://food-delivery-admin-git-main-ghanshyam-patidars-projects.vercel.app'  // your admin frontend URL
];

// middleware
app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin (like mobile apps, curl, postman)
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json())


//  db Connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter) 
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
     res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

