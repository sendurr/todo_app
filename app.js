
var module = angular.module("myApp", []);
module.controller("todoCtl", function($scope){

    $scope.todos=[];

    $scope.addTodo = function(){
        var todo = {item:$scope.input};
        $scope.todos.push(todo);
        $scope.input="";
    }




});
