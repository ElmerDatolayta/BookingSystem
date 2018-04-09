
angular.module('BookingApplication').factory('appService',['$http',function ($http){
    var baseUrl = 'http://192.168.254.103/api/';
    var factory = {};
    factory.getLocation = function() {
        return $http.get(baseUrl + 'location');
    }
    return factory;
}]);