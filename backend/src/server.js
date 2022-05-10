const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const dotenv =require('dotenv');
const usersRouter = require('./routes/user');

const server = express();
const port = 4000;

   // mongo db connection
     dotenv.config();

     mongoose
       .connect(process.env.MONGODB_URI)
       .then(() => console.log('connect to database mongodb'))
       .catch((err) =>
         console.log('Error to connect database, error: ' + err)
       );

       // middleware
       server.use(cors());
       server.use(express.json());

       server.use('/api/v2',usersRouter);
       

         //rutas

   server.get('/', (request, response) => {
    response.send('Hola desde mi apirestfull');
  });
  

server.listen(port, () => {
    console.log(`Server connect & run, in the port ${port}`);
  });
