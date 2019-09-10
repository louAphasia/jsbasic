const http=require('http');
const EventEmitter=require('events');

const myEmitter=new EventEmitter();
const server=http.createServer((request,response)=>{
    myEmitter.emit('enterSite', request.url);
    response.end();
});

server.listen(3000);
console.log('Server listening port at 3000')

myEmitter.on('enterSite',(url)=>{
    console.log(` user entersite : ${url}`);
});