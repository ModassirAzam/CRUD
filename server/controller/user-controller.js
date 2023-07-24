import User from "../schema/user-schema.js";

import Signup from "../schema/user-schema.js"//

export const addUser = async (request,response)=>{
    const user = request.body;
    
    const newUser = new User(user);

    try{
        await newUser.save();
        //console.log(newUser);
        return response.status(201).json(newUser);

    }catch(error){
        return response.status(409).json({ message: error.message });
    }
}

export const getUsers = async (request,response)=>{
    try{
       const users = await User.find({});
      // console.log(users);
       response.status(200).json(users);
    }catch(error){
        response.status(404).json({ message: error.message });
    }
}

export const getUser = async (request,response)=>{
    try{
        const user = await User.find({phone:request.params.phone});
        // const user = await User.findById(request.params.id);// this id is maintained by mongoo itself, can use this method also
        console.log(user);
        response.status(200).json(user);
     }catch(error){
        response.status(404).json({ message: error.message });
     }
}

export const editUser = async (request,response)=>{
    let user = request.body;
    const editUser = new User(user);
    try{
        await user.updateOne({ phone:request.params.phone },editUser);
        response.status(201).json(editUser);
    }catch(error){
        response.status(409).json({message:error.message})
    }
}

export const deleteUser = async (request,response)=>{
    try{
        await User.deleteOne({phone:request.params.phone});
        response.status(200).json({message:'user deleted success'})
    }catch(error){
        response.status(409).json({message:error});
    }
}

export const signin = async(request,response)=>{
    const signup = request.body;
    const newSignup = new Signup(signup);
    try{
        await newSignup.save();
        response.status(201).json(newSignup);
    }catch(error){
        response.status(409).json({message:error.message})
    }
}

