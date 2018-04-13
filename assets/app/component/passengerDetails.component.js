class PassengerDetailsCtrl {
    $onInit() {
        this.passengerTypes = this.bookingData;
    }
}
  

angular
.module('BookingApplication')
.component('passengerDetails', {
    templateUrl: 'assets/app/template/component/passengerDetails.html',
    bindings: {
    },
    controller: PassengerDetailsCtrl,
    controllerAs : 'vm'
});