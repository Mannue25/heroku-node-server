
const express = require('express');

const app = express();

const hbs = require('hbs');
require('./hbs/helper');

const port = process.env.PORT || 3000;

// mildwhare es un callback que se ejecuta siempre-

app.use(express.static(__dirname + '/public'));
// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/',(req, res) => {
  
    res.render('home', {
        nombre: 'Manuel',
       
    });
});
app.get('/about',(req, res) => {
  
    res.render('about', {
       
    });
});
// ===LocalHost:3000===

app.listen(port, () => {

    console.log(`Escuchando server ${port}`);
});