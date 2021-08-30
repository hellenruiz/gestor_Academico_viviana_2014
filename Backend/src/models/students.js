const {Schema, model} = require('mongoose');

const studentSchema = new Schema ({
  name: String,
  lastname: String,
  docIdent: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps:true 
});

module.exports = model ('student', studentSchema);