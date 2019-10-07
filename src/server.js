const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//Conexão com o Mongo Atlas cloud, já com admin e senha.
mongoose.connect('mongodb+srv://123:123@apinoticias-sl3ud.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});


app.use(express.json());
app.use(routes);

app.listen(3000);