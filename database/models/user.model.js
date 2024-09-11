import mongoose from "mongoose";


const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        default: function () {
            return this.firstName + this.lastName;
        }
    },
    email:String,
    password:String,
    recoveryEmail:{
        type:String,
        required: false 
    },
    mobileNumber:String,
    role :{
        type:String,
        enum:['User','Company_HR'],
        default:'User'
    },
    status :{
        type:String,
        enum:['online','offline'],
        default:'offline'
    },
    DOB:{
        type:Date,
        get: function(value){
            return value.toISOString().slice(0, 10)
        },

    },
    isVerify:{
        type:Boolean,
        default:false
    },
    company:{
        type:mongoose.Types.ObjectId,
        ref:'company'
    }

},{timestamps:true})
const userModel=mongoose.model('user',schema)

export default userModel;