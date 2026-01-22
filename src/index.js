import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})





connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERR: ", error);
        throw error
    })
    port = Process.env.PORT||8000;
    app.listen(port,()=>{
        console.log(`Server is running at port : ${port}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!", err);
})