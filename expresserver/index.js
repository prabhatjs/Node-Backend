const express=require("express")//express is function
PORT=8080;
const app=express();//expresss server creation
app.get('/',(request,response)=>{//listene request
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