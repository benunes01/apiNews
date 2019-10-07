const mongoose = require('mongoose');

const NoticiaSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
});

module.exports = mongoose.model('Noticia', NoticiaSchema);