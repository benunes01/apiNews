const Noticia = require('../models/Noticia');

module.exports = {

    async show(req, res) {


        const noticias = await Noticia.findById(req.params.id);

        return res.json(noticias);
    },

    async index(req, res) {
        const noticias = await Noticia.find({});

        return res.json(noticias);

    },


    async store(req, res) {
        const { titulo, descricao } = req.body;


        const noticia = await Noticia.create({
            titulo,
            descricao
        });

        return res.json(noticia);
    },

    async update(req, res) {
        const noticia = await Noticia.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(noticia);
    },

    async destroy(req, res) {
        await Noticia.findByIdAndDelete(req.params.id);

        return res.send();
    },
};