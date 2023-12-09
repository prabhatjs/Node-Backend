<h1>HTTP module</h1>
It is used for making a web server to handle requests and provide responses

```````````````````````````````````````````
const app=express();
app.get('/',(request,response)=>{
    response.send("OK I M Fine ");
});

app.listen(PORT,()=>{
    console.log("Server is Working")
});
```````````````````````````````````````````
add though git bash --
$ echo "node_modules" > .gitignore


<h3>middleware</h3>
<p>
middleware are just function,that have to access request object(req), response object(rep) and the (next) function point to another middleware it call request-response cycle. 
</p>
