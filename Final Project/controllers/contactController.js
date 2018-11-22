var axios = require('axios')

var contact = require('../models/contactModel')

exports.contactRegisterPage = (req,res) => {
    res.render('RegisterPage',{})
}

exports.contactSearchPage = (req,res) => {
    res.render('SearchPage',{contact:null})
}

//Register a contact → /contacts
exports.contactRegister = (req,res) =>{
    console.log(`${req.body.name}`,req.body.email,req.body.gender)
    axios.post('https://cryptic-retreat-41638.herokuapp.com/api/contacts', {
            name: `${req.body.name}`,
            email: `${req.body.email}`,
            phoneNumber: `${req.body.phone}`,
            gender: `${req.body.gender}`
    })
    .then(function (response) {
        console.log(response.data)
        res.redirect('/contacts/register')
    })
    .catch(function (error) {
        console.log(error)
    })
}
//Listing contacts → /contacts
exports.contactGetAll = (req,res) =>{
    //using models
    // console.log(contact.getAll()) // returning undefined

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
    console.log("Chegou aqui")
}

//Delete a contact → /contacts/:id
exports.contactDelete = (req,res) =>{
    axios.delete("https://cryptic-retreat-41638.herokuapp.com/api/contacts/"+req.params.id)
    .then(function (response) {
        console.log(response.data)
        console.log("Redirecionou")
        res.redirect('/contacts')
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