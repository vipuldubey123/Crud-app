const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/dbdbdbdb");

var userSchema = mongoose.Schema({
  name: String,
  profession: String,
  dpimage: String,
  favourite:{
    type: Number,
    default: 0,
  },
  comments:{
    type:Array,
    default:[],
  }
})

module.exports = mongoose.model('user', userSchema);



