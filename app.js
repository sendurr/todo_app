
var module = angular.module("myApp", []);
module.controller("todoCtl", function($scope){

    $scope.todos=[];
    $scope.edit=false;
    $scope.done=true;

    $scope.addTodo = function(){
        $scope.edit=false;
        var todo = {item:$scope.input};
        $scope.todos.push(todo);
        $scope.input="";
    }

    $scope.deleteTodo = function(index){
        $scope.edit=false;
        $scope.todos.splice(index,1);
        $scope.input="";
    }

    $scope.editTodo = function(){
        $scope.edit=true;
        $scope.done=false;
    }

    $scope.doneEdit = function(){
        $scope.edit=false;
        $scope.done=true;
    }




});
