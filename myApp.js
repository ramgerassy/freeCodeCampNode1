let express = require('express');
let app = express();

console.log(__dirname + '\\views\\index.html')
app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '\\views\\index.html')
    
})
































 module.exports = app;
