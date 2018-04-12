angular
     .module('BookingApplication')
     .component('paymentInfo', {
          templateUrl: 'assets/app/template/component/payment.html',
          bindings: {
               tripDetails: "<"
          },
          controller: function() {
               console.log(this.name);
          }

     });