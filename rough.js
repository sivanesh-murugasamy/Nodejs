const mongoose=require('mongoose');

const connection_String='mongodb://localhost:27017/Datastore';
mongoose.connect(connection_String, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
.then(()=>{
    console.log("Succesfully Connected to Mongodb");
})
.catch((error)=>{
    console.log(error);
});