const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    completed: {
      type: Boolean,
      required: true,
    },
  });
module.exports = mongoose.model('user',userSchema);