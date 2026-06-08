import { model, Schema } from "mongoose";


// write the schema


const UserSchema=new Schema ({
    // way of validation data  
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    }

})

// create your model



const movie=model("Movie",UserSchema)

export default movie
