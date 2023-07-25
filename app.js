const express = require('express')
const app = express()
const puerto = 8085

//To Do 
// require hbs

app.set('view engine', 'hbs');
// Servir contenido estático
app.use( express.static('public') );


app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'Hugo Zerdan',
        titulo: 'Curso de Node'
    });
});
  
app.get('/elements',  (req, res) => {
    res.sendFile(__dirname+'/public/elements.html');
});
 

app.get('*',  (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});


app.listen(puerto,() => {
    console.log (`Escuchando en el puerto ${puerto}`);
});