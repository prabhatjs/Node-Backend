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
`````````````````````````````````````````````````
$ echo "node_modules" > .gitignore
`````````````````````````````````````````````````


<h3>middleware</h3>
<p>
middleware are just function,that have to access request object(req), response object(rep) and the (next () ) function point to another middleware it call request-response cycle. 
</p>

```````````````````````````````````
const middlewarearray=[mylogger1,mylogger2]
```````````````````````````````````
`src` inside the src folder all the source code of the project

inside `src` folder

-`config` 

-`routes` we register a route and thee corresponding middleware and controllers to it.

- `middlewares` they are   just going to intercept the incoming requests where we can write our validators ,authanticators etc.

- `controllers` they are kind of the last middlewares as post them you your
bussiness layer to execute the bussiness logic . In controllers we just receive the incoming request and data and then pass it to the bussiness layer , and once business layer returns an output , we structure the api response in controllers and send the output

- `repositories`  this folder contains all the logic using which we intract the DB by writing queries , all the raw queries or orm queries will go here .

- `services ` contains the bussiness logic and intracts with repositories for data from the database 

`utils` contains helper mehtods