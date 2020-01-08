const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public')); //middleware que define la carpeta que servira como public y donde se podran ver los html


app.get('/', (req, res) => {
    //res.send('Hola Mundo')
    let salida = {
        nombre: 'Victor',
        edad: 32,
        url: req.url
    }
    res.send(salida); //send lo envia como application/json
});
app.get('/data', (req, res) => {
    res.send('Hola Data')


});



app.listen(3000, () => {
    console.log("Escuchando peticiones en el puerto 3000");
})