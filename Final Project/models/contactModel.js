var axios = require('axios')

exports.getAll = () => {
    axios.get('https://cryptic-retreat-41638.herokuapp.com/api/contacts')
    .then(function (response) {
        return response.data.data
    })
    .catch(function (error) {
        console.log(error)
    })
}