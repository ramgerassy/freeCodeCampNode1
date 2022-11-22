let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})

app.get("/json",(req,res)=>{
    const message = "Hello json"
    console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE === "uppercase")  
    {
        console.log("i am here")
        message = message.toUpperCase()
    } 
    res.json({"message":message})
 })
































 module.exports = app;
