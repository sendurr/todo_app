
var module = angular.module("myApp", []);
module.controller("calcCtrl", function($scope){

    $scope.result=0;
    var result_temp=0;
    $scope.recenthistory=[];
    $scope.showrecent=false;

    $scope.calculate =function(){
        $scope.result = result_temp;
        $scope.recentTrans();
    }

    $scope.add =function(){
        $scope.operator="+";
        result_temp = parseInt($scope.arg1) + parseInt($scope.arg2);
        //console.log(result_temp);
    }

    $scope.sub =function(){
        $scope.operator="-";
        result_temp = parseInt($scope.arg1) - parseInt($scope.arg2);
        //console.log(result_temp);
    }

    $scope.div =function(){
        $scope.operator="/";
        result_temp = parseInt($scope.arg1) / parseInt($scope.arg2);
        //console.log(result_temp);
    }

    $scope.mul =function(){
        $scope.operator="*";
        result_temp = parseInt($scope.arg1) * parseInt($scope.arg2);
        //console.log(result_temp);
    }

    $scope.recentTrans =function(){
        $scope.showrecent=true;
        var trans= {arg1:$scope.arg1, arg2:$scope.arg2, oper: $scope.operator, result:$scope.result };
        $scope.recenthistory.push(trans);
        console.log($scope.recenthistory);
    }



});
