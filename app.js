const express = require('express');
const app = express();
const port = 3000;

//Servidr contenido estatico con Middlewares
app.use( express.static('public'));

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello world!');
});

app.get('/hola-mundo', (req, res) => {
  res.send('Hello mundo en su respectiva');
});

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});


// const funcionHash = x =>{
//     let seed=41;
//     let diccionario = "abefimoprstuv";
//     //for(i = 0; i < x.length; i++) {
//     for(i = 0; i < 10; i++) {
//         seed = (seed * 19 + diccionario.indexOf(x[i]));
//         console.log(`imprime:${i}=${seed}`);
//     }
    
//     return seed;
// }

// let resultado = funcionHash("abefimoprstuv");
// console.log('llamando a la funcion');
// console.log(resultado);