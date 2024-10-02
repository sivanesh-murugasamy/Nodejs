let http=require('http')
const greet=require('./locMod')

http.createServer((req,res)=>
{
    var op=greet.greeting();
    res.writeHead(200,{'content-type':'text/plain'});
    res.write(op);
    res.write("Heelo mame how are you" );
    res.end();
}).listen(2000);