let express = require('express');
let app = express();

app.use("/public",express.static(__dirname + '/public'))

app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})
































 module.exports = app;
