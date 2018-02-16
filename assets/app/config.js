angular.module('BookingApplication')
.config(['$stateProvider','$urlRouterProvider','$qProvider',function($stateProvider,$urlRouterProvider,$qProvider) {
    
    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        return $state.go('home');
    });

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'assets/app/template/main.html'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'assets/app/template/about.html'
    })
    .state('event', {
        url: '/event',
        templateUrl: 'assets/app/template/event.html'
    })
    .state('course', {
        url: '/course',
        templateUrl: 'assets/app/template/course.html'
    })
    .state('instructor', {
        url: '/instructor',
        templateUrl: 'assets/app/template/instructor.html'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'assets/app/template/contact.html'
    })
    .state('admission', {
        url: '/admission',
        templateUrl: 'assets/app/template/admission.html'
    })
    .state('booking', {
        url: '/booking',
        controller: 'scheduleController',
        templateUrl: 'assets/app/template/booking.html'
    });

    $qProvider.errorOnUnhandledRejections(false);
}]);
