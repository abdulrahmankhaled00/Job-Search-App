import mongoose from "mongoose";


const schema = new mongoose.Schema({
    jobId:{
        type:mongoose.Types.ObjectId,
        ref:'job'
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    userTechSkills:Array,
    userSoftSkills:Array,
    userResume :String
},{timestamps:true})

const appCollectionModel=mongoose.model('appCollection',schema)

export default appCollectionModel;