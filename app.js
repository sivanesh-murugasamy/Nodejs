
const express=require('express');

const app=express()

const PORT=3000;

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get("/get_details",(req,res)=>{
    const op=req.query
    console.log(op.name)
    res.send(`hi ${op.name},your form is submitted`)
})

app.listen(PORT,()=>{
    console.log(`App is served on ${PORT}`)
})