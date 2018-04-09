
angular.module('BookingApplication').factory('appService',['$http',function ($http){
    var baseUrl = 'http://localhost/api/';
    var factory = {};
    factory.getLocation = function() {
        return $http.get(baseUrl + 'location');
    }
    return factory;
}]);