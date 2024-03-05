import { Timestamp } from "mongodb";
import { Schema,model } from "mongoose";

const frontendSchema = new Schema(
    {
        eventtype:{
            type:String,
            required:true
        },
        book_id:{
            type:String,
            required:true
        },
        member_id:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        }
    }
)

const Frontend = model('Frontend',frontendSchema,'frontend')

export default Frontend