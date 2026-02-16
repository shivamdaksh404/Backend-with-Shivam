import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
salary:{
    type:Number,
    default:0
},
qualification:{
    type:String,
    required:true,
},
experienceInYears:{
    type:Number,
    required:true,
},
workInHospital:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital",
},
name:{
    type:String,
    required:true,
}

},{timestamps:true});

export const Doctor = mongoose.model("Doctor",doctorSchema) 