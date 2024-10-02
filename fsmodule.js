
//file managemnt module

let fs=require('fs');


fs.rename('demo.txt','file.txt',()=>{
    console.log("Renamed Successfully");
})

fs.appendFile('file.txt'," Hey guys",()=>{
    console.log("Appended successfully");
})