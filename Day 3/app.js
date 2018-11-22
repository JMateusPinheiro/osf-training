var express = require('express')
var app = express()
var util = require("./js/util");
var bodyParser = require('body-parser');
var axios = require('axios')

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() ); 

app.get('/get1', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 1)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.get('/get2', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 2)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.get('/get3', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 3)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.get('/get4', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 4)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.get('/get5', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 5)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.get('/get6', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 6)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.get('/get7', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 7)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.get('/get8', (req,res)=>{
    axios.get("https://reqres.in/api/users/" + 8)
        .then(function (response) {
            if(response.status == 200){
                console.log(response.status);
                res.send(response.data.data)
            }
        })
        .catch(function (error) {
            console.log(error.status);
        })
})

app.post('/post', (req,res)=>{
    axios.post("https://reqres.in/api/users",{
        name: req.body.name,
        job: req.body.job
    }).then((response)=>{
        console.log(response.data)
        res.render('index',{
            responseForm: response.data,
            token: null
        })
    }).catch((error)=>{
        console.log(error.status)
    })
})

app.get('/',(req,res)=>{
    res.render('index',{
        responseForm: {
            name: null,
            job: null
        },
        token: null
    })
})

app.post('/login',(req,res)=>{
    console.log(req.body.email)
    console.log(req.body.password)
    axios.post("https://reqres.in/api/register",{
        email: `${req.body.email}`,
        password: `${req.body.password}`
    }).then((response)=>{
        console.log(`${response.data.token}`)
        res.render('index',{
            responseForm: {
                name: null,
                job: null
            },
            token: response.data.token
        })
    }).catch((error)=>{
        console.log(error)
    })
})
app.listen(3000,()=>{
    console.log("Server has been started in port 3000")
})