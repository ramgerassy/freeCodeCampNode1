let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})

app.get("/json",(res,req)=>{
    const j = {"message":"Hello json"}
    res.json(j)
 })
































 module.exports = app;
