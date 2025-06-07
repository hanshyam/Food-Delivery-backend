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


// middleware
app.use(cors({
  origin: 'https://food-delivery-frontend-git-main-ghanshyam-patidars-projects.vercel.app',
  credentials: true // if using cookies or authentication headers
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

