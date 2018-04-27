angular.module('BookingApplication')
.controller('appController',['$scope','appService','$location','$filter','$state', '$localStorage', '$sessionStorage',
    function ($scope, appService, $location, $filter, $state, $localStorage, $sessionStorage){
    var vm = this;
    vm.options = {
        minDate: new Date(),
        defaultDate: new Date()
    };
    vm.format = 'MMMM dd, yyyy';
    vm.oneWayDatePicker = new Date();
    vm.originDatePicker = new Date();
    vm.returnDatePicker = new Date();    
    vm.search = function() {
        $state.go('booking');
    };

    function getLocations() {
        appService.getLocation().then(function(response) {
            vm.locationList = response.data;
        })
    }

    function init() {
        getLocations();
    }

    vm.checkLocations = (key) => {
        if (vm.origin === vm.destination){
            vm.errorLocations = "Origin and Destination cannot be the same.";
            vm[key] = null;
        }else{
            vm.errorLocations = '';
        }
    };


    init();
}]);