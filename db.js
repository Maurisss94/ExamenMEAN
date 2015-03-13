var mongoose = require("mongoose");
mongoose.connect("mongodb://Maurisss94:patata@ds053937.mongolab.com:53937/botiga", function(){
   console.log("Connectat a mongolab"); 
});

module.exports = mongoose;