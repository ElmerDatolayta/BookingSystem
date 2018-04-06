angular.module('BookingApplication').controller('scheduleController',['$scope','appService','$location','$filter','$state', '$localStorage', '$sessionStorage',
    function ($scope,appService,$location,$filter, $state, $localStorage, $sessionStorage){
    var vm = this;
    vm.proceed = function() {
        $('.slick-slider').slick('slickNext');
    }
    vm.back = function() {
        $('.slick-slider').slick('slickPrev');
    }
}]);