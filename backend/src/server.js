const express = require('express');
const mongoose = require('mongoose');
const dotenv =require('dotenv');

const server = express();
const port = 4000;

   //rutas

   server.get('/', (request, response) => {
    response.send('Hola desde mi apirestfull');
  });

     // mongo db connection
     dotenv.config();

     mongoose
       .connect(process.env.MONGODB_URI)
       .then(() => console.log('connect to database mongodb'))
       .catch((err) =>
         console.log('Error al conectar a la base de datos, error: ' + err)
       );

server.listen(port, () => {
    console.log(`Server connect & run, in the port ${port}`);
  });
