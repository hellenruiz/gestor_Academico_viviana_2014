

const usersCtrl = {};




//llamando al model para insertar los usuarios

const Users = require('../models/users');




//Obteniendo todos los usuarios MongoDB

usersCtrl.getUsers = async (req, res) => {

  const users = await Users.find()//Asincrona función

  console.log("======> users on users.controllers " + users);

  res.json(users);//Retorna un json

};




//Obteniendo un usuario de mongoDB por medio de su id

usersCtrl.getUser = async (req, res) => {

  const id = req.params.id;

  const user = await Users.find({Docid: id})//Asincrona función

  console.log("======> users on users.controllers " + user);

  res.json(user[0]);//Retorna un json

};




//Método para crear usuarios

usersCtrl.createUsers = async (req, res) => {

  console.log(req.body)

  const {Docid, password, role} = req.body;

  const newUser = new Users({

    Docid: Docid,

    password: password,

    role: role

  });

  await newUser.save();

  res.json({message: 'Users saved'});

};




module.exports = usersCtrl;

const express = require('express');

const router = express.Router();




const {getUsers, getUser, createUsers} = require('../controllers/users.controllers');




//Esta ruta hace referencia a /api/student en app.js

router.route('/')

  .get(getUsers) //se llama desde el controlador.Esto genera orden

  .post(createUsers)




router.route('/:id')

  .get(getUser)







//Exportando modulo

module.exports = router;
