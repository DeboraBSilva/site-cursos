const nodemailer = require('nodemailer')
const transporte = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

function send(mensagem) {
    return new Promise((resolve, reject) => {
        const email = {
            to: process.env.EMAIL_TO,
            subject: 'Email Formulário',
            html: mensagem
        }
        transporte.sendMail(email, function(err, info) {
            if (err) {
                reject(err)
            }
            resolve(info)
        })
    })
}
module.exports = { send }