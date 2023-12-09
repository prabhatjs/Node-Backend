const http=require('http');
const PORT=8080
 /*
 using the createserver function we create a http server using http module
 this function return a server object and takes a callback as an argument
 */
 const server=http.createServer(function listner(request,response){
    /*
    request--show the detail of the incoming http request-->object
    response-> what response we are need to send incoming request-->object
    !this callback function is listner function that 
    !collect every request that we will make to our server
    
    */

    if(request.url==='/home')
    {
        //send response './home ' is url
       
        console.log("Return What type request is:-",request.method);
        response.write("First Write method");//end allways in end of wrtite method
        response.end("welcome to home"); 
    }
    // console.log(request);
    // console.log(response);

    console.log("Request Receive"); 
 });
 
 server.listen(PORT,function exec(){
     console.log("server is Up");
 });