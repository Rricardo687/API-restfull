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
            // update a user // actualizar un usuario

 router.put('/users/:id', (request, response) => {
  const {id} = request.params;
  const{name,age,email} = request.body;
  userSchema
  .updateOne({_id: id },{$set: {name,age,email}})
  .then((data) => response.json({ success: data }))
  .catch((err) => response.json({ failured: err }));
 });
 
            // delete user // eliminar usuario

 router.delete('/users/:id', (request, response) => {
  const {id} = request.params;
  userSchema
  .deleteOne({_id: id })
  .then((data) => response.json({ success: data }))
  .catch((err) => response.json({ failured: err }));
 });



module.exports=router;
