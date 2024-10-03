const express=require('express')
const mongoose=require('mongoose')
const userRouter=require('./Route/userRoute')
const app=express();
const PORT=8000;



mongoose.connect('mongodb://localhost:27017/kec_db')
.then(()=>{
    console.log("connection Established");
}).catch((err)=>{
    console.log("Error Connecting to Database"+err.message)
});

app.use(userRouter)
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`your app is served on port ${PORT}`)
})
