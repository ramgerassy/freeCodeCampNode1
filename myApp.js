let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + '/public'))

const logger = function(req,res,next){
    
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
}



app.use(logger)

app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})

app.get("/now",function(req,res,next){
    req.time = new Date().toString()
    next()
},(req,res)=>{
    res.json({time : req.time})
})

app.get("/json",(req,res)=>{
    let message = "Hello json"
    console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE === "uppercase")  
    {
        message = message.toUpperCase()
    } 
    res.json({"message":message})
 })



 module.exports = app;
