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

    //Departure

    vm.increment = function(type) {
        if (type)  {
            totalCount();
            if(total < 9){
                type.count++;
                Fare();
                processingFee();
                grandTotalDeparture();
                vatDeparture();
                OverAllTotal();
            }
        }
    }

    vm.decrement = function(type) {
        if (type) {
            totalCount();
            if (total > 1 && type.count > 0)  { 
                type.count--;
                Fare();
                processingFee();
                grandTotalDeparture();
                vatDeparture();
                OverAllTotal();
            }
        }
    }

    var total = 0;
    function totalCount(){
        total = 0;
        for (var i= 0; i<vm.passengerTypes.length; i++){
            total += vm.passengerTypes[i].count;
        }
    }

    vm.totalFare = 0;    
    var subtotalFare = 0;
    function Fare(){
        subtotalFare = 0;
        vm.totalFare = 0;  
        for (var i= 0; i<vm.passengerTypes.length; i++){
            subtotalFare = vm.passengerTypes[i].count * vm.passengerTypes[i].fare; 
            vm.totalFare += subtotalFare;
        }
    }
    Fare();

    vm.totalFee = 0;    
    var subtotalFee = 0;
    function processingFee() {
        vm.totalFee = 0;    
        subtotalFee = 0;
        for (var i= 0; i<vm.passengerTypes.length; i++){
            subtotalFee = vm.passengerTypes[i].count * 25; 
            vm.totalFee += subtotalFee;
        }
    }
    processingFee();

    vm.grandTotal = 0;
    function grandTotalDeparture(){
        vm.grandTotal = 0;
        vm.grandTotal = vm.totalFare + vm.totalFee;
    }
    grandTotalDeparture();

    vm.totalVat = 0;
    function vatDeparture() {
        vm.totalVat = 0;
        vm.totalVat = vm.grandTotal * .12;
    }
    vatDeparture();

    //Return Code

    vm.incrementReturn = function(type) {
        if (type)  {
            totalCountReturn();
            if(totalReturn < 9){
                type.count++;
                FareReturn();
                processingFeeReturn();
                grandTotalReturn();
                vatReturn();
                OverAllTotal();
            }
        }
    }

    vm.decrementReturn = function(type) {
        if (type) {
            totalCountReturn();
            if (totalReturn > 0 && type.count > 0)  { 
                type.count--;
                FareReturn();
                processingFeeReturn();
                grandTotalReturn();
                vatReturn();
                OverAllTotal();
            }
        }
    }

    var totalReturn = 0;
    function totalCountReturn(){
        totalReturn = 0;
        for (var i= 0; i<vm.returnPassengerTypes.length; i++){
            totalReturn += vm.returnPassengerTypes[i].count;
        }
    }

    vm.totalFareReturn = 0;    
    var subtotalFareReturn = 0;
    function FareReturn(){
        subtotalFareReturn = 0;
        vm.totalFareReturn = 0;  
        for (var i= 0; i<vm.returnPassengerTypes.length; i++){
            subtotalFareReturn = vm.returnPassengerTypes[i].count * vm.returnPassengerTypes[i].fare; 
            vm.totalFareReturn += subtotalFareReturn;
        }
    }
    FareReturn();

    vm.totalFeeReturn = 0;    
    var subtotalFeeReturn = 0;
    function processingFeeReturn() {
        vm.totalFeeReturn = 0;    
        subtotalFeeReturn = 0;
        for (var i= 0; i<vm.returnPassengerTypes.length; i++){
            subtotalFeeReturn = vm.returnPassengerTypes[i].count * 25; 
            vm.totalFeeReturn += subtotalFeeReturn;
        }
    }
    processingFeeReturn();

    vm.grandTotalReturn = 0;
    function grandTotalReturn(){
        vm.grandTotalReturn = 0;
        vm.grandTotalReturn = vm.totalFareReturn + vm.totalFeeReturn;
    }
    grandTotalReturn();

    vm.totalVatReturn = 0;
    function vatReturn() {
        vm.totalVatReturn = 0;
        vm.totalVatReturn = vm.grandTotalReturn * .12;
    }
    vatReturn();

    vm.AllTotal = 0;
    function OverAllTotal(){
        vm.AllTotal = 0;
        vm.AllTotal = vm.grandTotal + vm.grandTotalReturn;
    }
    OverAllTotal();

    $('.slick-slider').slick({
        draggable: false
    });
}]);

