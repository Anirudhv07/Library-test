import { Schema,model } from "mongoose";

const bookSchema = new Schema(
    {
        BookID:{
            type:String,
            required:true
        },
        BookName:{
            type:String,
            required:true
        },
        NumberOfCopies:{
            type:String,
            required:true
        }
    }
)
const Book = model('Book',bookSchema,'books')

export default Book