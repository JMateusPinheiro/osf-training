var express = require('express');
var app = express();
var util = require("./js/util");
var bodyParser = require('body-parser');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/oddOrEven/:number', (req, res) => {
    res.send(util.oddOrEven(req.params.number))
});

app.get('/randomNumber', (req, res) => {
    res.render('randomNumber',{
        randomNumber: util.randomNumber()
    })
})

app.get('/lessThan/:number', (req,res) => {
    if(req.params.number < 5){
        res.render('lessThan',{
            number: req.params.number
        })
    }else{
       res.send("Redering without page: " + req.params.number)
    }
})

app.get('/renderArray',(req,res) => {
    res.render('renderArray',{
        array: [1,2,3,4,5,6,7,8,9,0]
    })
})

app.listen(3050, function () {
  console.log('Example app listening on port 3050!');
});
