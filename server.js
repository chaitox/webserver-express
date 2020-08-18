const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers/helpers')


//obtener puerto de heroku

const puerto = process.env.PORT || 3000;

app.use( express.static(__dirname+'/public') );


//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');





app.get('/', (req, res)=>{
    res.render('home',{
        nombre: 'Ricardo',
        anio : new Date().getFullYear()
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        anio : new Date().getFullYear()
    })
})

app.listen(puerto, ()=>{
    console.log(`Escuchando peticiones en el puerto ${puerto}`);
});