angular.module('adoptionBlog')
.controller('AdminCreateCtrl', function($scope, $http) {

  $scope.messages = [
    'Please fill out all fields.',
    'Thanks for your post! View the blog to see it live!'
  ];

  $scope.message = $scope.messages[0];

  $scope.createPost = function(title, content, tags) {
    $http({
      url: 'http://localhost:9292/api/posts',
      method: 'POST',
      params: { title: title, content: content, tags: tags }
    }).success(function(results) {
      $scope.message = $scope.messages[1];
      //$scope.title = '';
    }).error(function(err) {
      console.log('Ajax request go down da hole');
      console.log(err);
    });
  };

});
