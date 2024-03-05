import Member from '../model/memberSchema.js';
import Book from '../model/bookSchema.js';
import Frontend from '../model/frontendSchema.js';
import mongoose from 'mongoose';
import mongodb from 'mongodb'

const controller={


    getAllBooks:async(req,res)=>{
        const response=await Frontend.find()
        res.json(response)

        
    },

    getTotalBooks:async(req,res)=>{
        const response=await Book.find()
        res.json(response)

        
    },

    getAllMembers:async(req,res)=>{
        const response=await Member.find()
        res.json(response)

        
    },

    checkout_return_Controller:async(req,res)=>{
        console.log(req.body);
        const event =req.body.currevent
        const bookId=req.body.id
const objectId =new mongoose.Types.ObjectId(bookId);

        const response= await Frontend.updateOne({_id:objectId},{$set:{eventtype:event}})
        console.log(response);
        if(response.modifiedCount==1){
            const response= await Frontend.findOne({_id:objectId})
            res.json(response)
        }
    }
}
export default controller