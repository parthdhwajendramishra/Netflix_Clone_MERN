const express =require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");

dotenv.config();

const authRoute= require("./routes/auth");
const userRoute= require("./routes/users");

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err));


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);


app.listen(8800,()=>{
    console.log("Backend")
})