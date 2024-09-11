import mongoose from "mongoose";


const schema = new mongoose.Schema({
    jobTitle : String,
    jobDescription :String,
    technicalSkills : [String],
    softSkills  :[String],   
    jobLocation  :{
        type:String,
        enum:[ "onsite", "remotely", "hybrid"]
    },
    workingTime   :{
        type:String,
        enum:[ "part-time" , "full-time"]
    },
    seniorityLevel :{
        type:String,
        enum:[ "Junior", "Mid-Level", "Senior","Team-Lead", "CTO" ]
    },
    addedBy:{
        type:mongoose.Types.ObjectId,
        ref:'company'
    },


},{timestamps:true})

const jobModel=mongoose.model('job',schema)

export default jobModel;


/*


*/