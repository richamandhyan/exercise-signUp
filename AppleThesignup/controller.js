signUpApp.controller('homeController', ['$scope', '$location','$filter', function ($scope, $location, $filter) {
	
	'use strict';
	$scope.submit = function () {
		$location.path('/signUp');
	};
	
	
}]);
		

signUpApp.controller('signUpController', ['$scope','$location','dateFormat', '$filter','$window', function ($scope, $location, dateFormat, $filter, $window) {
	
	$scope.submit = function () {
		$location.path('/details');
	};
	
	// function to submit the form after all validation has occurred            
        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
               console.log('it works!');
            }
		

        };
	
	
	$scope.userdetails = [];
	
 
	$scope.addName = function() {
		if ($scope.firstName && $scope.passOne && $scope.dob && $scope.username || $scope.lastName) {
			$scope.userdetails.push({'firstName':$scope.firstName,
									 'lastName': $scope.lastName,
									 'username':$scope.username,
									 'password':$scope.passOne,
									 'dob': $scope.dob
									 })
									}
			var dataObj = {
					firstName : $scope.firstName,
					username : $scope.username,
					lastName : $scope.lastName,
					password : $scope.passOne,
					dob : $scope.dob,
				      };
			console.log($scope.userdetails);
			$scope.firstName='';
			$scope.username='';
			$scope.lastName='';
			$scope.passOne='';
			$scope.dob ='';
		};

	$scope.resetForm = function(){
   $window.alert('Are you sure?');
		console.log('hit');
};
	$scope.save = function() {
		if($scope.bio || $scope.interest){
			
			$scope.userdetails.push({'bio':$scope.bio,
									'interest':$scope.interest})
		}
		var dataObj = {
			bio: $scope.bio,
			interest: $scope.interest
		};
		$scope.bio='';
		$scope.interest='';
		console.log($scope.userdetails);
	};
	
	
}]);





//angular.module('myApp.directives', [])
    signUpApp.directive('pwCheck', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    // console.info(elem.val() === $(firstPassword).val());
                    ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword).val());
                });
            });
        }
    }
}]);

//filter

signUpApp.service('dateFormat', function($filter)
{
 return function(input)
 {
  if(input == null){ return ""; } 
 
  var _date = $filter('date')(new Date(input), 'MM dd yyyy');
 
  return _date.toUpperCase();

 };
});
