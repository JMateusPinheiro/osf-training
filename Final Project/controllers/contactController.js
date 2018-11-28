var axios = require('axios')
var request = require('request')

var contact = require('../models/contactModel')

exports.contactRegisterPage = (req,res) => {
    res.render('RegisterPage',{})
}

exports.contactSearchPage = (req,res) => {
    res.render('SearchPage',{contact:null})
}

exports.contactUpdatePage = (req,res) =>{
    axios.get("https://cryptic-retreat-41638.herokuapp.com/api/contacts/"+ req.params.id)
    .then(function (response) {
        console.log(response.data)
        res.render('UpdatePage',{
            contact: response.data.data
        })
    })
    .catch(function (error) {
        console.log(error)
    })
}

//Register a contact → /contacts
exports.contactRegister = (req,res) =>{
    request.post({url:'https://cryptic-retreat-41638.herokuapp.com/api/contacts', 
        form: {
            name: `${req.body.name}`,
            email: `${req.body.email}`,
            phone: `${req.body.phone}`,
            gender: `${req.body.gender}`
        }}, 
        function(err,httpResponse,body){
            res.redirect('/contacts/register')
        })
}
//Listing contacts → /contacts
exports.contactGetAll = (req,res) =>{

    // Without using models
    axios.get('https://cryptic-retreat-41638.herokuapp.com/api/contacts')
    .then(function (response) {
        res.render('ListPage',{
            contacts: response.data.data
        })
    })
    .catch(function (error) {
        console.log(error)
    })
}

//Update a contact → /contacts/:id
exports.contactUpdate = (req,res) =>{
    request.put({url:'https://cryptic-retreat-41638.herokuapp.com/api/contacts/'+req.body.id, 
        form: {
            name: `${req.body.name}`,
            email: `${req.body.email}`,
            phone: `${req.body.phone}`,
            gender: `${req.body.gender}`
        }}, 
        function(err,httpResponse,body){
            res.redirect('/')
        }
    )
}

//Delete a contact → /contacts/:id
exports.contactDelete = (req,res) =>{
    axios.delete("https://cryptic-retreat-41638.herokuapp.com/api/contacts/"+req.params.id)
    .then(function (response) {
        res.send(response.data.status)
    })
    .catch(function (error) {
        console.log(error)
    })
}
//Get a contact → /contacts/:id
exports.contactGet = (req,res) =>{
    axios.get("https://cryptic-retreat-41638.herokuapp.com/api/contacts/"+ req.params.id)
    .then(function (response) {
        console.log(response.data)
        res.render('SearchPage',{
            contact: response.data.data
        })
    })
    .catch(function (error) {
        console.log(error)
    })
}