const User = require('../models/User');

//Caso for fazer login e cadastro futuramente
//Inutilizavel no momento
module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            const user = await User.create({ email });
        }
        return res.json(user);
    }
};