const express=require('express');
const app=express()
const PORT=2000;

app.use(express.json())

let user=[
    {id:1,name:"sivanesh",age:23},
    {id:2,name:"akilesh",age:24},
    {id:3,name:"dhanush",age:25}
];

app.get("/users",(req,res)=>{
     res.json(user);
})

app.post("/users",(req,res)=>{
     let newUser=
        {id:user.length+1,
         name:req.body.name,
         age:req.body.age
        }
        user.push(newUser);
        res.status(201).json(newUser);
     
})

app.put("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const foundUser=user.find(user=>user.id===id)
    if(!foundUser)
    {
        res.status(404).json({message:"User Not Found"});
    }
     foundUser.name=req.body.name;
     foundUser.age=req.body.age;
     res.json({message:"Updated Successfully"})


    //  const index=user.findIndex(user=>user.id===req.params.id)
     
})

app.delete("/users/:id",(req,res)=>{
     const id=parseInt(req.params.id);
     user=user.filter(user=>user.id!==id);
     res.json({message:'User Deleted Successfully'})
})


app.listen(PORT,()=>{
    console.log(`App is serving on the port ${PORT}`);
})
