const mongoose = require('mongoose');

//Inicio simples de Users

const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);