 const http=require('http');
const PORT=8080
 //!using the createserver function we create a http server using http module
 //this function return a server object and takes a callback as an argument
 const server=http.createServer(()=>{
    //this callback function is listner function that collect every request that we will make to our server
 });
 
 server.listen(PORT,function exec(){
     console.log("server is Up");
 });