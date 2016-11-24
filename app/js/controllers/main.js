'use strict';
angular.module('frontendApp.controllers').controller('MainCtrl', function($rootScope, $scope, $state, $uibModal, $timeout, HttpService) {
    $scope.unknownUser = {
        email: "",
        password: ""
    };

    $scope.loginResponse = {
        email: "testemail@microsoft.com",
        user_id: "123456789"
    }

    $scope.toCompleted = function() {$state.go('completed');};
    $scope.toLoggedIn = function() {$state.go('loggedIn', {obj: $scope.loginResponse});};
   

   // Get the project requests
    $scope.signIn = function() {
        console.log($scope.unknownUser.email);
        console.log($scope.unknownUser.password);
        if($scope.unknownUser.email == "fakeadmin@microsoft.com")
        {
            $scope.loginResponse.email = "fakeadmin@microsoft.com";
        }
        $rootScope.signIn();
        $scope.toLoggedIn();
    };

    // Get the project requests
    $scope.openSignInModal = function() {

       var modalInstance = $uibModal.open({
          templateUrl: 'signInModalContent.html',
          controller: 'SignInModalInstanceCtrl',
          resolve: {
            unknownUser: function () {
              
            }
          }
        });

        modalInstance.result.then(function (unknownUser) {
          $scope.unknownUser = unknownUser;
          $scope.signIn();
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
    };
});

angular.module('frontendApp.controllers').controller('SignInModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.unknownUser = {
        email: "",
        password: ""
    };

  $scope.signIn = function () {
    $uibModalInstance.close($scope.unknownUser);
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
