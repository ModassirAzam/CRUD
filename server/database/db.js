import mongoose from "mongoose";


const connection = async (username,password)=>{
    const URL = `mongodb://${username}:${password}@ac-4sd3yw5-shard-00-00.zuz4hls.mongodb.net:27017,ac-4sd3yw5-shard-00-01.zuz4hls.mongodb.net:27017,ac-4sd3yw5-shard-00-02.zuz4hls.mongodb.net:27017/?ssl=true&replicaSet=atlas-12gv5z-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology:true , useNewUrlParser:true });
        console.log("Connected!");
    }catch(err){
        console.log("Error while conntecting ",err);
    }
}



export default connection;