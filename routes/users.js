let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(function(){
  console.log('Database connected')
})
.catch(function(e){
  console.log(e)
})

let userSchema = mongoose.Schema({
  name: String,
  avatar: String
})

module.exports = mongoose.model('photo', userSchema);