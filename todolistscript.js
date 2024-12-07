const app = angular.module("todoApp", []);

app.controller("todoController", function ($scope) {
  $scope.tasks = []; 
  $scope.editIndex = null; 
  $scope.newTask = ""; 

  $scope.addTask = function () {
    if ($scope.newTask) {
      $scope.tasks.push($scope.newTask);
      $scope.newTask = ""; 
    }
  };

  $scope.editTask = function (index) {
    $scope.editIndex = index; 
    $scope.editedTask = $scope.tasks[index]; 
  };
  
  $scope.saveTask = function (index) {
    if ($scope.editedTask) {
      $scope.tasks[index] = $scope.editedTask;
      $scope.editIndex = null; 
    }
  };

  $scope.deleteTask = function (index) {
    $scope.tasks.splice(index, 1);
  };
});
