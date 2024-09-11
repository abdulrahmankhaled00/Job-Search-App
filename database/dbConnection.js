import mongoose from "mongoose";

const dbConnection=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/exam').catch(err => console.log(err))
}

export default dbConnection