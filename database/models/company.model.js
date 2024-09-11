import mongoose from "mongoose";


const schema = new mongoose.Schema({
    companyname: String,
    email:String,
    description : String,
    industry :String,
    address:String,
    numberOfEmployees :{
        type:Number,
        min:11,
        max:20
    },
    mobileNumber:String,
    companyHR  :{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },


},{timestamps:true})

const companyModel=mongoose.model('company',schema)

export default companyModel;