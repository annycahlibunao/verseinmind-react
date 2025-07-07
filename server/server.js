const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
    console.log('App is listening');
})

const route = require('./resources/users.js');

app.get('/users', route.getAllUsers);
app.post('/users', route.createUser);
//app.get('/users', route.getUserByLogin);

