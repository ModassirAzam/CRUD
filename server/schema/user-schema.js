import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:String
})

const signupSchema = mongoose.Schema({//signup schema made by me
    email:String,
    username:String,
    password:String
})


//autoIncrement.initialize(mongoose.connection);
//userSchema.plugin(autoIncrement.plugin,'user')

const user = mongoose.model('user',userSchema);


const sigup = mongoose.model('signup',signupSchema);//

export default user;