let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})

app.get("/json",(req,res)=>{
    const message = "Hello json"
    if(process.env.MESSAGE_STYLE === "uppercase")   message = message.toUpperCase()
    res.json({"message":message})
 })
































 module.exports = app;
