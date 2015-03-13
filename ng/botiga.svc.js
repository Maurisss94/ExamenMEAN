angular.module("app-botiga")
    .factory("BotigaFactory", function($resource) {
    return $resource("/api/botiga/:id", null,
    {
        'update': { method:'PUT' }
    });
});