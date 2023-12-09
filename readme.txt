<h1>HTTP module</h1>
It is used for making a web server to handle requests and provide responses
```````````````````````````````````````````
Basic Setup For Express Server
const app=express();
app.get('/',(request,response)=>{
    response.send("OK I M Fine ");
});

app.listen(PORT,()=>{
    console.log("Server is Working")
});
```````````````````````````````````````````