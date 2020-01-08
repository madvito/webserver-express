const http = require('http'); //viene en node

http.createServer((req, res) => {
        //devolver a modo REST un JSON
        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'Victor',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));



        //res.write('Hola mundo');
        res.end();
    })
    .listen(8080);
console.log('Escuchando puerto 8080');