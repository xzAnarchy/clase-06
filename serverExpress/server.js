// Instalo la libreria express
// npm install express
// defino el puerto 8080
// creo el servidor
// defino el mensaje de respuesta
// defino el path de la ruta
// defino el metodo de la ruta
// defino el callback de la ruta
// defino el callback del servidor


const express = require('express')

const app = express()

const PORT = 8080

let visitas = 0

app.get('/', (req, res) => {
    res.send(`<h1 style='color:blue'> Hola Mundo </h1>`)
})

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`La cantidad de visitas es ${visitas}`);
});

app.get('/fyh', (req, res) => {
    const date = new Date
    res.send(date.toLocaleDateString())
});

//configuramos el puerto
const server = app.listen(PORT, () => {
    console.log(`servidor express escuchando en el puerto: ${PORT}`)
})

//escuchamos un evento en caso de error

server.on('error', error => console.log(`error en el servidor ${error}`))