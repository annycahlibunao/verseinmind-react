const db = require('../db.js');

const User = function(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
}

function createUser(request, response) {
    if (!request.body) {
        response.status(400).send({ message: 'Content cannot be empty'});
    } else {
        const newUser = new User(request.body);
        db.query('INSERT INTO users SET ?', newUser, (error, results) => {
            if(error) {
                response.status(500).send('An error occurred while creating the project');
            } else {
                response.send({id: results.insertId, ...newUser});
            }
        })
    }
}


function getUserByLogin(request, response) {
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', request.params.email, request.params.password, (error, results) => {
        if(error) {
            response.status(404).send({
                message: error.message || 'An error occurred'
            });        
        } else {
            response.send(results);
        }
    });
}

module.exports = {
    createUser,
    getUserByLogin
}
