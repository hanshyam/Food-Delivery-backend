import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://GhasnshyamsFood:X_QHL3f-MjwY!p.@cluster0.donk4xc.mongodb.net/FoodWebsite').then(()=>console.log("DB Connected")
    )
}

// mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
