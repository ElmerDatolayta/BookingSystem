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
    addPersonCount(data) {
        if (this.getTotalCount() < 9) {
            data.count++;
            const person = {
                Gender: 0,
                Nationality: 0,
                FirstName: '',
                LastName: '',
                Birthdate: new Date()
            };
            data.person.push(person);
        }
    }
    removePersonCount(data) {
        if (data.count && this.getTotalCount() > 1) {
            data.count--;
            data.person.splice(0,1);
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