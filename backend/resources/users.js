const db = require('../db.js');

const User = function(data) {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.password = data.password;
}

function addUser(request, response) {
    if (!request.body) {
        response.status(400).send({ message: 'Content cannot be empty.'});
    } else {
        const newUser = new User(request.body);
        
        db.query('INSERT INTO users SET ?', newUser, (err, results) => {
            if (err) {
                response.status(500).send('An error occured while adding the user');
            } else {
                response.send({id: results.insertId, ...newUser});
            }
        })
    }
}

module.exports = {
    addUser
}