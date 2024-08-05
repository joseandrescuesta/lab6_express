const express = require("express");
const hostname = "localhost";
const port = 2000;
const morgan = require("morgan");
const path = require("path");
const cors = require('cors');
const bp = require("body-parser");
const app = express();

// se configura el CORS para que acepte solicitudes del front
app.use(cors());
//se usa el modulo morgan como logger del servidor
app.use(morgan('dev'));
// Se configura el directorio donde debe tomar los recursos
app.use(express.static(path.join(__dirname, 'public')));
// se configura el body parser
app.use(bp.json());

app.get('/index.html', (req, res) => {
    res.send('<html><body><h1>Respuesta del servidor para index.html</h1></body></html>');
});

app.get('/pag2.html', (req, res) => {
    res.send('<html><body><h1>Respuesta del servidor para pag2.html</h1></body></html>');
});

app.post('/index.html', (req, res) => {
    res.send('<html><body><h1>Respuesta del servidor para index.html</h1></body></html>');
});

app.post('/pag2.html', (req, res) => {
    res.send('<html><body><h1>Respuesta del servidor para pag2.html</h1></body></html>');
});

app.use((req, res, next) => {
    console.log("Cabecera: " + req.headers);
    res.status(404).send('<html><body><h1>Recurso no encontrado</h1></body></html>');
});


app.listen(port, hostname, () => {
    console.log(`Servidor en ejecucion en http://${hostname}:${port}`);
})