let express = require('express');
let app = express();

app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})
































 module.exports = app;
