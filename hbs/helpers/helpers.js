const hbs = require('hbs');
//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split( ' ');
 
    
    return palabras;
    
})