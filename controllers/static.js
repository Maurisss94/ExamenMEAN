var express = require("express");
var router = express.Router();
var options = {
    root: __dirname + "/../layouts"
};

router.use(express.static(__dirname + "/../public"));
router.get("/", function(req, res, next){
   res.sendFile("index.html", options); 
});
router.get("/seccio/verdura", function(req, res, next){
   res.sendFile("seccio.html", options); 
});
router.get("/preu", function(req, res, next){
   res.sendFile("preu.html", options); 
});


module.exports = router;