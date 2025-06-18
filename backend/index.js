import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import appRoute from "./routes/application.route.js"

dotenv.config({});

const app=express();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"i am coming from backkend",
        success:true
    })
})

//middleware
app.use(express.json());
app.use(express.urlencoded({urlencoded:true}));
app.use(cookieParser());

const corsOption={
     origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));


const PORT= process.env.PORT||3000;


//api's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/applicant",appRoute);

// http://localhost:8000/api/v1/user/"register"
// http://localhost:8000/api/v1/user/"login"

app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`);
    
})
