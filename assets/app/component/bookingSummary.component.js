class BookingSummaryCtrl {
    getFares() {
        const data = this.bookingData;
        let totalFare = 0;
        if (data && data.length) {
            data.forEach((person) => {
                totalFare += (person.count * person.fare);
            })
        }
        return totalFare;
    }
    getProcessingFee() {
        const data = this.bookingData;
        let totalFee = 0;
        if (data && data.length) {
            data.forEach((person) => {
                totalFee += (person.count * 25);
            })
        }
        return totalFee;
    }
    getGrandTotal() {
        const grandTotal = this.getFares() + this.getProcessingFee();
        if (parseInt(this.bookingType, 10) === 1) {
            this.totalData.departureTotal = grandTotal;
        } else {
            this.totalData.returnTotal = grandTotal;
        }
        return grandTotal;
    }
    getVat() {
        return this.getGrandTotal() * 0.12;
    }
    $onInit() {
        this.passengerTypes = this.bookingData;
    }
}

angular
.module('BookingApplication')
.component('bookingSummary', {
    templateUrl: 'assets/app/template/component/bookingSummary.html',
    bindings: {
        bookingData: '=',
        typeName: '=',
        totalData: '=',
        bookingType: '<'
    },
    controller: BookingSummaryCtrl,
    controllerAs : 'vm'
});