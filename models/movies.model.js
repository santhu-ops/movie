import { model, Schema } from "mongoose";


// write the schema


const UserSchema=new Schema ({
    title:String,
    desc:String,

})

// create your model



const movie=model("Movie",UserSchema)

export default movie
