const express = require('express')
const app = express()
const puerto = 8085

// Servir contenido estático
app.use( express.static('public') );


app.get('/hola-mundo',  (req, res) => {
    res.send('Hola mundo tiene su propia pagina');
});
  

app.get('*',  (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});


app.listen(puerto,() => {
    console.log (`Escuchando en el puerto ${puerto}`);
});