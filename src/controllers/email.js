const email = require('../utils/email')

exports.email = async(req, res) => {
    email.send('Nome: ' + req.body.name + '<br>' + 'Email: ' + req.body.email + '<br><br>Mensagem:<br>' + req.body.mensagem)
    res.render('home')

}