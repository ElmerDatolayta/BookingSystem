angular.module('BookingApplication').controller('scheduleController',['$scope','appService','$location','$filter','$state', '$localStorage', '$sessionStorage',
    function ($scope,appService,$location,$filter, $state, $localStorage, $sessionStorage){
    var vm = this;
    vm.tabsValue = {
        SEARCH_TRIP: 1,
        TRIP_DETAILS: 2,
        PASSENGER_DETAILS: 3,
        PAYMENT: 4,
    }
    vm.currentTab = vm.tabsValue.TRIP_DETAILS;
    vm.proceed = function() {
        $('.slick-slider').slick('slickNext');
        vm.currentTab++;
    }
    vm.back = function() {
        if (vm.currentTab === vm.tabsValue.TRIP_DETAILS) {
            $state.go('home');
        } else {
            $('.slick-slider').slick('slickPrev');
            vm.currentTab--;
        }
    }

    $('.slick-slider').slick({
        draggable: false
    });
}]);