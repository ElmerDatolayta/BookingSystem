angular.module('BookingApplication')
.controller('appController',['$scope','appService','$location','$filter','$state', '$localStorage', '$sessionStorage',
    function ($scope, appService, $location, $filter, $state, $localStorage, $sessionStorage){
    var vm = this;
  
    vm.destination = "1";
    vm.options = {
        format: "MMMM DD, YYYY",
        minDate: new Date(),
        defaultDate: new Date()
    };
    vm.search = function() {
        $state.go('booking');
    };
}]);