const studentsCtrl = {};

//llamando al model
const studentModel = require('../models/students');


studentsCtrl.getStudents = async (req, res) => {
  const students = await studentModel.find()//Asincrona función
  res.json(students);//Retorna un json
};


studentsCtrl.createStudent = async (req, res) => {
  console.log(req.body)
  const {name, lastname, docIdent} = req.body;
  new studentModel({
    name: name,
    lastname: lastname,
    docIdent: docIdent
  });
};

module.exports = studentsCtrl;