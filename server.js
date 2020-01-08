const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; //para que use la variable de entorno del puerto de heroku y de no encontrarlo, usa 3000 (sirve para local)



app.use(express.static(__dirname + '/public')); //middleware que define la carpeta que servira como public y donde se podran ver los html __dirname copia el path anterior, asi no hay drama con localhost o server

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');









app.get('/', (req, res) => {


    res.render('home', { //el objeto envia las variables que se leen en home.hbs
        nombre: 'viTo',
    });
});
app.get('/about', (req, res) => {


    res.render('about');

});

app.get('/data', (req, res) => {
    res.send('Hola Data')


});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})