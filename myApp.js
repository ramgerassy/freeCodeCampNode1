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
    res.send({time : req.time})
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

 app.get("/:word/echo",(req,res)=>{
    const word = req.params.word;
    res.json({'echo':req.params.word})
 })

const nameHandler = function(req,res){
    const first = req.query.first
    const last = req.query.last
    res.json({'name': first + " " + last})
}

app.route('/name?first=firstname&last=lastname').get(nameHandler).post(nameHandler)

 module.exports = app;
