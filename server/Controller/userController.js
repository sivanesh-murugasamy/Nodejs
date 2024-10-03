const User=require('../model/userModel')

exports.getAllUsers=async (req,res)=>{
    try{
       const user=await User.find({})
       res.json(user);
    }catch(error)
    {
      console.log(error.message)
    }
}