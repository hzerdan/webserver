
const http = require('http');

const servidor = http.createServer( (req,res) => {

    // res.writeHead(404);
    // res.write('404 | Page not found');
    res.write('Esta es mi página');
    // res.end();
    // console.log(req)

    // res.writeHead(200, { 'Content-type': 'text/plain'});
    // res.writeHead(200, { 'Content-type': 'application/json'});
    // const persona = {
    //     edad: 66,
    //     nombre:'Hugo'
    // }
    // res.write( JSON.stringify(persona));

    // Para devolver un csv
    // res.setHeader('Content-Disposition','attachment;filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv'});
    // res.write('id;nombre\n');
    // res.write('1;Hugo\n');
    // res.write('2;Horacio\n');
    // res.write('3;Adriana\n');
    // res.write('4;Ines\n');
    // res.write('5;Lucía\n');


    res.end()

});

servidor.listen(8085);
