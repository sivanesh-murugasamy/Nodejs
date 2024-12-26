const mongoose=require('mongoose');

const connection_String='mongodb://localhost:27017/Datastore';
const conn = mongoose.createConnection(connection_String, {
    useNewUrlParser: true,
});
conn.once('open',()=>{
    console.log("Succesfully Connected to Mongodb");

   

    const model=mongoose.model('user',schema);

    const newUser=new model({
        name:"rajesh",
        email:"raja@gmail.com",
        age:20
    });

    newUser.save()
       .then(()=>{
         console.log("User Saved Successfully");
       })
       .catch((err)=>{
          console.log(err);
       })
    });
});