import { model, Schema } from "mongoose";


// write the schema


const Schema=new Schema ({
    title:String,
    desc:String,

})

// create your model



const movie=model("Movie",Schema)

export default movie
