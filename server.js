
const express=require ('express');
const app=express();
const PORT = 5000;

app.get('/',(req,res)=>{
    res.send('Got a get request');
})

app.post('/',(req,res)=>{
    res.send('Got a Post Request');
})

app.put('/user',(req,res)=>{
    res.send('Got a put request at /user ');
})

app.delete('/user',(req,res)=>{
    res.send('Got a delete request at /user ');
})

app.listen(PORT,()=>{
    console.log(`Your app is being served on ${PORT}`);
})