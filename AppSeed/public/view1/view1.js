'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl','$scope', [function($scope) {
  var url = "http://localhost:3000/users/signup";
  $scope.login = function(uername, password){
    $.ajax({
      type: "POST",
      url: url,
      data: JSON.stringify({"username": username, "password": password}),
      dataType: JSON,
      success: function(res){
        alert(res);
      }
    })
  }
}]);