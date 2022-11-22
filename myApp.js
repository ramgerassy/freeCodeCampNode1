let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + '/public'))

const logger = function(req,res,next){
    
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
}

const dateTimeLogger = function(req,res,next){
    req.time = new Date().toString()
    next()
}

app.use(logger)

app.get("/now",dateTimeLogger,(req,res)=>{
    res.json({time:req.time})
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
        message = message.toUpperCase()
    } 
    res.json({"message":message})
 })
































 module.exports = app;
