import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,min:16,max:30,required:true},
    rollno:{type:Number,required:true},
    phone:{type:Number,required:true},
    branch:{type:String,required:true},
    gender:{type:String,required:true},
    address:[{city:{type:String,required:true},state:{type:String,required:true}}],
    email :{type:String,required:true}

})

const Student=mongoose.model("Student",studentSchema);
export default Student;


//All fields need to set as required
//Set any one field as unique
//Add email address,phone number
//have to set enum for gender and branch