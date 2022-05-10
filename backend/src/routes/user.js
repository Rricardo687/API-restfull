const express = require("express");
const router = express.Router();
const userSchema = require('../models/user');

   // create user // routes 
         // C R U D 
        // create user / crear  usuario
  router.post('/users', (request, response) => {
   const user = userSchema(request.body);
   user
   .save()
   .then((data) => response.json({ success: data }))
   .catch((err) => response.json({ failured: err }));
  });
        // get all users / mostras todos los usuarios
 router.get('/users', (request, response) => {
  const user = userSchema(request.body);
  userSchema
  .find()
  .then((data) => response.json({ success: data }))
  .catch((err) => response.json({ failured: err }));
 });

           // get a user // mostras un usuario especifico

 router.get('/users/:id', (request, response) => {
  const {id} = request.params;
  userSchema
  .findById(id)
  .then((data) => response.json({ success: data }))
  .catch((err) => response.json({ failured: err }));
 });

 router.put('/users/:id', (request, response) => {
   response.send('modificar un uruario');
 });

 router.delete('/users/:id', (request, response) => {
   response.send('eliminar usuario');
 });



module.exports=router;
