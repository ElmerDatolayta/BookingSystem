class TripDetailsCtrl {
    getTotalCount() {
        let totalCount = 0;
        const data = this.bookingData;
        if (data && data.length) {
            totalCount = data.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count;
            },0);
        }
        return totalCount;
    }
    addPersonCount(person) {
        if (this.getTotalCount() < 9) {
            person.count++;
        }
    }
    removePersonCount(person) {
        if (person.count && this.getTotalCount() > 1) {
            person.count--;
        }
    }
    $onInit() {
        this.passengerTypes = this.bookingData;
    }
}
  

angular
.module('BookingApplication')
.component('tripDetails', {
    templateUrl: 'assets/app/template/component/tripDetails.html',
    bindings: {
        bookingData: '=',
        typeName: '='
    },
    controller: TripDetailsCtrl,
    controllerAs : 'vm'
});