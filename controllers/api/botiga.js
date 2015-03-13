var botiga = require("../../models/botiga");
var router = require("express").Router();

router.get("/", function(req, res, next){
    botiga.find(function(err, botigues){
       if(err){
           return next(err);
       }else{
           res.status(201).json(botigues);
       } 
    });
});
router.post("/", function(req, res, next){
   var tienda = new botiga({
       codi: req.body.codi,
       nom: req.body.nom,
       preu: req.body.preu,
       seccio: req.body.seccio
       
       
   }); 
    tienda.save(function(err, botiga){
       if(err){
           return next(err);
       }else{
           res.status(201).json(botiga);
       }
    });
});

router.delete("/", function(req, res, next){
    console.log("Error no es pot fer DELETE");
    res.status(400).send("Error no es pot fer DELETE");
});
router.get("/:id", function(req, res, next){
   botiga.find({codi:req.params.id},function(err,botiga) {
       if(err){
           return next(err);
       }else{
           res.status(201).json(botiga);
       }
       
   });
});
router.post("/:id", function(req, res, next){
    res.status(400).send("Error no es pot fer POST");
});
router.put("/", function(req, res, next){
    botiga.findByIdAndUpdate(req.body._id, req.body, function(err){
       if(err){
           return next(err);
       }else{
           res.status(201).json("Put fet del"+ req.body);
       } 
    });
});

router.delete("/:id", function(req, res, next){
    botiga.remove({codi:req.params.id}, function(err){
       if(err){
           return next(err);
       }else{
           
           res.status(201).json("Producte esborrat");
       } 
    });
   
});

router.get("/seccio/:seccio", function(req, res, next){
   botiga.find({seccio: req.params.seccio}, function(err, botiga){
      if(err){
          return next(err);
      }else{
          res.status(201).json(botiga);
      } 
   });
});
router.get("/preu/:preu", function(req, res, next){
   botiga.find({preu: req.params.preu}, function(err, botiga){
      if(err){
          return next(err);
      }else{
          res.status(201).json(botiga);
      } 
   });
});
module.exports = router;