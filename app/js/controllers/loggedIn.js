'use strict';
angular.module('frontendApp.controllers').controller('LoggedInCtrl', function($rootScope, $scope, $state, $stateParams, $timeout, HttpService) {

   $rootScope.validatePage();
   $scope.formInfo = {
   	user_id: null,
   	email: null,
   	name: null,
   	user_type: null,
   	english: false,
   	math: false,
   	computerScience: false,
   	skype: false,
   	city: null,
   	state: null,
   	availability: []
   };

   $scope.views = {
   	userName: true,
   	userType: false,
   	mathAndEnglish: false,
   	userInterests: false,
   	skype: false,
   	userLocation: false,
   	schedule: false,
   	finished: false
   };

   $scope.day = "monday";
   $scope.learner = "What type of learner are you?";
   $scope.learnStyle = "What is your learning style?";
   $scope.personality = "What is your learning personality?";
   $scope.isAdmin = false;

   $scope.hours = {
   		t00: false,
   		t01: false,
   		t02: false,
   		t03: false,
   		t04: false,
   		t05: false,
   		t06: false,
   		t07: false,
   		t08: false,
   		t09: false,
   		t10: false,
   		t11: false,
   		t12: false,
   		t13: false,
   		t14: false,
   		t15: false,
   		t16: false,
   		t17: false,
   		t18: false,
   		t19: false,
   		t20: false,
   		t21: false,
   		t22: false,
   		t23: false
   }

   $scope.playSound = function()
   {
   		
   }

   $scope.changeLearner = function(tmp) {
   		$scope.learner = tmp;

   }

   $scope.changeStyle = function(tmp) {
   		$scope.learnStyle = tmp;

   }

   $scope.changePersonality = function(tmp) {
   		$scope.personality = tmp;

   }

   $scope.filledOutName = function() {

   		$scope.views.userName = false;
   		$scope.views.userType = true;

   }

   $scope.filledOutUserType = function(type) {

   		$scope.views.userType = false;
   		$scope.views.mathAndEnglish = true;

   		if(type == "student") $scope.formInfo.user_type = 1;
   		else $scope.formInfo.user_type = 2;

   }

   $scope.filledOutMathAndEnglish = function() {

   		$scope.views.mathAndEnglish = false;
   		$scope.views.userInterests = true;
   }

   $scope.filledOutInterests = function() {

   		$scope.views.userInterests = false;
   		$scope.views.skype = true;
   }

   $scope.filledOutSkype = function(useSkype) {

   		$scope.views.skype = false;
   		$scope.views.userLocation = true;
   		$scope.formInfo.skype = useSkype;
   }

   $scope.filledOutLocation = function() {

   		$scope.views.userLocation = false;
   		$scope.views.schedule = true;
   }

   $scope.filledOutSchedule = function() {
   	console.log("called");
   		if($scope.day == "monday")
   		{
			$scope.addAvailability(1);
   			$scope.day = "tuesday";
   			
   		}
   		else if($scope.day == "tuesday")
   		{
			$scope.addAvailability(2);
   			$scope.day = "wednesday";
   			
   		}
   		else if($scope.day == "wednesday")
   		{
   			$scope.addAvailability(3);
   			$scope.day = "thursday";
   			
   		}
   		else if($scope.day == "thursday")
   		{
   			$scope.addAvailability(4);
   			$scope.day = "friday";
   			
   		}
   		else if($scope.day == "friday")
   		{
   			$scope.addAvailability(5);
   			$scope.day = "saturday";
   			
   		}
   		else if($scope.day == "saturday")
   		{
   			$scope.addAvailability(6);
   			$scope.day = "sunday";
   			
   		}
   		else if($scope.day == "sunday")
   		{
   			$scope.addAvailability(7);
			$scope.views.schedule = false;
			$scope.views.finished = true;
			console.log($scope.formInfo);
			
   		}
   		return;
   }

   $scope.addAvailability = function(day_num)
   {
   		for (var key in $scope.hours) {
		  if ($scope.hours.hasOwnProperty(key) && $scope.hours[key]) {
		  	var tmp = key;
			while(tmp.charAt(0) === 't')
			    tmp = tmp.substr(1);
		    
		    var addition = day_num + "" + tmp;
		    var length = $scope.formInfo.availability.length;
		    $scope.formInfo.availability[length] = addition;
		   
		  }
		}

		for (var key in $scope.hours) {
			$scope.hours[key] = false;
		}

   }
   //TODO: set state params in the formInfo
   $scope.formInfo.email = $stateParams.obj.email;
   $scope.formInfo.user_id = $stateParams.obj.user_id;
   console.log($stateParams.obj.email);
   if($stateParams.obj.email == "fakeadmin@microsoft.com")
   {
   		$scope.isAdmin = true;
   		console.log("ksjdhf");

   }

});