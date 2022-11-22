let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + '/public'))

app.use("/public",(req,res,next)=>{
    const method = req.method
    const path = req.path
    const ip = req.ip
    console.log(`${method} ${path} - ${ip}`)
    next()
})

app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})

app.get("/json",(req,res)=>{
    let message = "Hello json"
    console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE === "uppercase")  
    {
        console.log("i am here")
        message = message.toUpperCase()
    } 
    res.json({"message":message})
 })
































 module.exports = app;
