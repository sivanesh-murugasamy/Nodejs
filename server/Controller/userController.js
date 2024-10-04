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

exports.createUser=async(req,res)=>{
  try{
    const user=new User(req.body)
    await user.save();
    res.status(201).send(user)
  }
  catch(error)
  {
    res.status(500).send(error)
  }
}

exports.deleteUser=async(req,res)=>{
  try{
    const user=await User.findByIdAndDelete(req.params.id)
    if(!user)
    {
      return res.status(404).send('User not found')
    }
    res.send("user deleted succesfully")
  }
  catch(error)
  {
    res.status(500).send(error)
  }
}

exports.updateUser=async(req,res)=>{
  try{
    const user=await User.findByIdAndUpdate(req.params.id,req.body)
    if(!user)
    {
      return res.status(404).send('User not found')
    }
    res.send("user updated succesfully")
  }
  catch(error)
  {
    res.status(500).send(error)
  }
}

exports.FindUser=async(req,res)=>{
  try{
    const user=await User.findById(req.params.id)
    if(!user)
    {
      return res.status(404).send('User not found')
    }
    res.send("user found updated succesfully ")
    
  }
  catch(error)
  {
    res.status(500).send(error)
  }
}

exports.findAll=async (req,res)=>{
  try{
     const user=await User.findAll({})
     res.json(user);
  }catch(error)
  {
    console.log(error.message)
  }
}