const express=require("express")//express is function
PORT=8080;
const app=express();//expresss server creation

//middleware
const mylogger1=(req,res,next)=>{
    console.log("Logging From Middleware");
    next();
}
const mylogger2=(req,res,next)=>{
    console.log("Loging From Middleware")
    next();
}
//one of the implimentation of middlleware
const middlewarearray=[mylogger1,mylogger2]

app.get('/', middlewarearray, (request,response)=>{//listene request
    // response.send("OK I M Fine ");
    //send json llike this
    response.json({
        message:"OKk"
    });
});
app.post('/home',(request,response)=>{
    response.json({
        message:"OK Post"
    })

})

app.listen(PORT,()=>{
    console.log("Server is Working")
});