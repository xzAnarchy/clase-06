const http = require('http')

const getMensaje = () => {
    let hora = new Date().getHours()
    if (hora >= 6 && hora <= 12) {
        return ('buenos dias!')
    } else if (hora >= 13 && hora <= 19) {
        return ('buenas tardes!')
    } else {
        return ('buenas noches!')
    }
}

const server = http.createServer((req, res) => {

    res.end(getMensaje())
})

const connectedServer = server.listen(8080, () => {
    console.log('server http escuchando en el puerto 8080')
})