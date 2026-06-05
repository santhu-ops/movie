import mongoose from "mongoose"
import dontenv from "dotenv"

dontenv.config()

 const connectDb = async()=>{
   try{
         await mongoose.connect(process.env.MONGODB_URI)

         console.log("Mongodb Connected.....")
   }
   catch(err){

    console.log(err.message)
    process.exit(1);

   }
}

export default connectDb;