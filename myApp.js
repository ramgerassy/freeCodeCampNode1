let express = require('express');
let bodyParser = require('body-parser')
let app = express();

/**
 * using body-parse package we can decode the massage inside
 * the req.body so we can handle its data and use it
 * this middleware is affects all routs
 */
app.use(bodyParser.urlencoded({extended:false}))

/**
 * whenever we enter the /public route
 * the server should serve the static css library
 * so our html file can proccess it and be pretty
 */
app.use("/public",express.static(__dirname + '/public'))

/**
 * a simple logger method to console.log the 
 * htttp verb, path and ip address
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logger = function(req,res,next){
    
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
}


/**
 * a middleware to get every http reques to log its basic data
 */
app.use(logger)

/**
 * serve to the homepage the index html file
 */
app.get("/",(req,res)=>{
    //res.send("Hello Express")
    res.sendfile(__dirname + '/views/index.html')
    
})


/**
 * return a json object with the current time stamp as a string
 */
app.get("/now",function(req,res,next){
    req.time = new Date().toString()
    next()
},(req,res)=>{
    res.send({time : req.time})
})

/**
 * create an api route that uses .env variables
 * if the .env variable named uppercase exists
 * the message turns into uppercase
 */
app.get("/json",(req,res)=>{
    let message = "Hello json"
    console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE === "uppercase")  
    {
        message = message.toUpperCase()
    } 
    res.json({"message":message})
 })

 /**
  * using http parameters to get data from the url
  * and return it to the user as a json object
  */
 app.get("/:word/echo",(req,res)=>{
    const word = req.params.word;
    res.json({'echo':req.params.word})
 })

 /**
  * handlert that serves a json format 
  * to the client with first name and last name
  * either recives as a query string or as urlencoded 
  * string in the request parameters
  * @param {*} req 
  * @param {*} res 
  */
const nameHandler = function(req,res){
    const first = req.query.first
    const last = req.query.last
    res.json({'name': first + " " + last})
}

app.route('/name').get(nameHandler)
.post((req,res)=>{
    const first = req.body.first
    const last = req.body.last
    res.json({'name': first + " " + last})
})

 module.exports = app;
