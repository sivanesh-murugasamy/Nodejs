
const eventEmitter=require('events');

const customEmitter=new eventEmitter();

customEmitter.on("res",(name,id)=>{
   console.log(`your name is ${name} and your id ${id}`);
})
customEmitter.emit("res","siva",1234);