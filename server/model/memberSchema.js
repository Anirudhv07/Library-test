import { Schema,model } from "mongoose";

const memberSchema = new Schema(
    {
        MemberID:{
            type:String,
            required:true
        },
        MemberName:{
            type:String,
            required:true
        }
    }
)

const Member = model('Member',memberSchema,'member')

export default Member