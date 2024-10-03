const mongoose=require("mongoose")

const userScheme=new mongoose.Schema({
        name:{
            type:String,required:true
        },
        age:Number
    });

    const panda=mongoose.model('users',userScheme);
    module.exports=panda;