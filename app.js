const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

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