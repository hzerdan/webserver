
const http = require('http');

const servidor = http.createServer( (req,res) => {

    // res.writeHead(404);
    // res.write('404 | Page not found');
    res.write('Esta es mi página');
    res.end();
    console.log(req.url)
});

servidor.listen(8085);
