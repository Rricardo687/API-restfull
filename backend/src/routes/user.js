const express = require("express");
const router = express.Router();

   // create user // routes 
         // C R U D 

  router.post('/users', (request, response) => {
   response.send('crear usuario');
 });

 router.get('/users', (request, response) => {
   response.send('mostrar todos los usuarios');
 });

 router.get('/users/:id', (request, response) => {
   response.send('mostrar un usuario especifico');
 });

 router.put('/users/:id', (request, response) => {
   response.send('modificar un uruario');
 });

 router.delete('/users/:id', (request, response) => {
   response.send('eliminar usuario');
 });



module.exports=router;
