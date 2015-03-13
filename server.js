var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/api/botiga", require("./controllers/api/botiga"));
app.use("/", require("./controllers/static"));

app.listen(port, function(){
   console.log("Servidor escolta pel port "+ port); 
});