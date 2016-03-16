signUpApp.config(function ($routeProvider) {
   
    'use strict';
	$routeProvider
    
		.when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'homeController'
	    })
		.when('/details', {
		    templateUrl: 'views/user-details.html',
		    controller: 'signUpController'
	    })
		.when('/signUp', {
            templateUrl: 'views/signUp.html',
            controller: 'signUpController'
	    });
});