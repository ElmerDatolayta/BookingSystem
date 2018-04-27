class PassengerDetailsCtrl {
    getTotalCount() {
        let totalCount = 0;
        const data = this.typeData;
        if (data && data.length) {
            totalCount = data.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.count;
            },0);
        }
        return totalCount;
    }
    removePersonCount(index) {
        if (this.bookingData.count && this.getTotalCount() > 1) {
            this.bookingData.count--;
            this.bookingData.person.splice(index,1);
            // data.person.splice(0,1);
        }
    }
    removePersonCountAll() {
        
        if (this.getTotalCount() - this.bookingData.count)
        {
            this.bookingData.count = 0;
            this.bookingData.person = [];    
        }
    }
    $onInit() {
        this.passengerTypes = this.bookingData;
    }
}

angular
.module('BookingApplication')
.component('passengerDetails', {
    templateUrl: 'assets/app/template/component/passengerDetails.html',
    bindings: {
        bookingData: '=',
        totalCount: '=',
        typeName: '=',
        typeData: '='
    },
    controller: PassengerDetailsCtrl,
    controllerAs : 'vm'
});