var express = require('express')
var router = express.Router()

var contactController = require('../controllers/contactController')

router.get('/register',contactController.contactRegisterPage)

router.get('/update/:id',contactController.contactUpdatePage)

router.get('/search', contactController.contactSearchPage)

//Register a contact → /contacts
router.post('/',contactController.contactRegister)

//Listing contacts → /contacts
router.get('/',contactController.contactGetAll)

//Update a contact → /contacts/:id
router.post('/:id', contactController.contactUpdate)

//Delete a contact → /contacts/:id
router.delete('/:id', contactController.contactDelete)

//Get a contact → /contacts/:id
router.get('/:id', contactController.contactGet)

module.exports = router;