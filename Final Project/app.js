var express = require('express')
var app = express()
var contactRouter = require('./routes/contactRouter')
var bodyParser = require('body-parser');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );
app.use(express.static(__dirname + '/public'));

app.use('/contacts', contactRouter)

app.get('/',(req,res)=>{
    res.redirect('/contacts')
})

app.listen(3000, ()=>{
    console.log("Server started in port 3000")
})