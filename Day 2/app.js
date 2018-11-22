var express = require('express');
var app = express();
var util = require("./js/util");

var bodyParser   = require('body-parser');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(util.get())
  res.send('<h1>Oi!</h1>');
});

app.get('/callFunction',(req,res) =>{
  var result = util.callFunction();
  res.send(`<h1>${result}</h1>`)
})

app.get('/calcQuad/:number',(req,res) =>{
  res.send(`<h1>${util.calcQuad(req.params.number)}</h1>`);

})

app.get('/callPage',(req,res) => {
  res.render('home',{
    item: "lorem ipsum"
  })
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
