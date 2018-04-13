angular.module('BookingApplication')
.controller('scheduleController',['$scope','appService','$location','$filter','$state', '$localStorage', '$sessionStorage',
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
    vm.altInputFormats = ['M!/d!/yyyy'];
    vm.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };

    var tempTypes = [
        {
            id: 1,
            count: 1,
            typeName: 'Regular',
            fare: 250.00
        },
        {
            id: 2,
            count: 0,
            typeName: 'Student',
            fare: 200.00
        },
        {
            id: 3,
            count: 0,
            typeName: 'Senior Citizen',
            fare: 200.00
        },
        {
            id: 4,
            count: 0,
            typeName: 'Children',
            fare: 150.00
        }
    ];

    vm.passengerTypes = angular.copy(tempTypes);
    vm.returnPassengerTypes = angular.copy(tempTypes);

    vm.totalData = {
        departureTotal: 0,
        returnTotal: 0
    };

    vm.getGrandTotal = () => {
        return vm.totalData.departureTotal + vm.totalData.returnTotal;
    };

    $('.slick-slider').slick({
        draggable: false
    });
}]);

