const myEvent=require('events');
const myEmit=new myEvent();

myEmit.on('event',()=>{
    console.log('this is event')
})
myEmit.on('event2',(message)=>{
    console.log(`this is event2:${message}`)
})

myEmit.emit('event');
myEmit.emit('event');
myEmit.emit('event2','My secret message');

myEmit.once('event',()=>{
    console.log('this is eve')
})

//wydarzenie na serwerze

const http=require('http');
const eventEmit=require('events');

const myemi=new eventEmit();
const server=http.createServer((request,response)=>{
    myemi.emit('entersite',request.url);
    response.end();
});

server.listen(3000);
console.log('server listening port 3000')

myemi.on('entersite',(url)=>{
    console.log(`user enter site:${url}`)
});