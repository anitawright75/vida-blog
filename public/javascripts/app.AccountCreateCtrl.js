angular.module('adoptionBlog')
  .controller('AccountCreateCtrl', function($scope, $http) {
    $scope.messages = [
      'Please register your account.'
    ];

    $scope.message =$scope.messages[0];

    $scope.createAccount = function(name, email, password){
      $http({
        url: 'http://localhost:9292/api/accounts/register',
        method: 'POST',
        params: { name: name, email: email, password: password }
      }).success(function(results) {
        $scope.message = $scope.messages[1];
      }).error(function(err) {
        console.log('Ajax request 2 goes down');
        console.log(err);
      });
    };

    $scope.loginAccount = function(email, password) {
      
      $http({
        url: 'http://localhost:9292/api/sessions/login',
        method: "POST",
        params: { email: email, password: password }
      }).success(function(result) {
        console.log(result)
      }).error(function(err) {
        console.log('Ajax request 3 goes down');
        console.log(err);
      }).then(function() {
        $scope.email = '';
        $scope.password = '';
      });
    }


  });
