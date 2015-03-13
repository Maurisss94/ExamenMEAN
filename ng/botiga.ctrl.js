angular.module("app-botiga")
    .controller("BotigaController", function($scope, BotigaFactory){

    $scope.botigues = [];
    
    BotigaFactory.query(function(botiga){
        $scope.botigues = botiga;
    });
    
    $scope.afegirProducte = function(){
        BotigaFactory.save({
            codi: $scope.codiProducteNou,
            nom: $scope.nomProducteNou,
            seccio: $scope.seccioProducteNou,
            preu: $scope.preuProducteNou
        },function() {
            $scope.botigues.unshift ({
            codi: $scope.codiProducteNou,
            nom: $scope.nomProducteNou,
            seccio: $scope.seccioProducteNou,
            preu: $scope.preuProducteNou
            });
            $scope.codiProducteNou = "";
            $scope.nomProducteNou = "";
            $scope.seccioProducteNou = "";
            $scope.preuProducteNou = "";
        });
            
        
        
    };
    
    $scope.editar = function(botiga){
        $scope.codiProducteEdit = botiga.codi;
        $scope.nomProducteEdit = botiga.nom;
        $scope.seccioProducteEdit = botiga.seccio;
        $scope.preuProducteEdit = botiga.preu;
        $scope.ProducteEdit = botiga;
    }
    $scope.esborrar = function(botiga){
        BotigaFactory.delete({
            id: botiga.codi
        }, function(){
        
            $scope.botigues.splice(botiga, 1);
        });
    }
    $scope.actualitzar = function(){
        BotigaFactory.update({"_id": $scope.ProducteEdit._id, "codi": $scope.codiProducteEdit, "nom": $scope.nomProducteEdit, 
                             "seccio": $scope.seccioProducteEdit, "preu": $scope.preuProducteEdit}, function(){

            $scope.ProducteEdit.codi = $scope.codiProducteEdit;
            $scope.ProducteEdit.nom = $scope.nomProducteEdit;
            $scope.ProducteEdit.seccio = $scope.seccioProducteEdit;
            $scope.ProducteEdit.preu = $scope.preuProducteEdit;
            
            $scope.codiProducteEdit = null;
            $scope.nomProducteEdit = null;
            $scope.seccioProducteEdit = null;
            $scope.preuProducteEdit = null;
        });
    }
   
});