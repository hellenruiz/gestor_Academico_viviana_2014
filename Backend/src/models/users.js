const {Schema, model} = require('mongoose');

const userSchema = new Schema ({
  Docid: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
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

module.exports = model ('users', userSchema);
