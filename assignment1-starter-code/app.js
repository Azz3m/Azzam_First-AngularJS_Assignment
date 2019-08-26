(function(){
  'user restrict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope){
    $scope.message = "Please enter data first";
    $scope.inputString="";
    $scope.borderStyle={};
    $scope.textStyle={};



//item1,item2,item3,item2,item3,item2,item3,item2,item3

    $scope.checkIf2Much = function (){

      var stringOfItems = $scope.inputString;
      var trimmesStringOfItems = stringOfItems.trim();
      var arr = trimmesStringOfItems.split(',');
      var filteredArray=[];
                    for(var i=0;i<arr.length;i++){
                      if (/\S/.test(arr[i])) {
                      // string is not empty and not just whitespace
                      filteredArray[i] = arr[i];
                         }
                    
                    }




      if(filteredArray.length > 3){
		  		
        $scope.message = "Too much!";
        $scope.textStyle = {'color': "green"};
        $scope.borderStyle = {'border-color': "green"};
      


      } else if(filteredArray.length <= 3 && filteredArray.length > 0){
        $scope.message = "Enjoy!";
        $scope.textStyle = {'color': "green"};
        $scope.borderStyle = {'border-color': "green"};
      }else {
		$scope.message = "Please enter data first";
        $scope.textStyle = {'color': "red"};
        $scope.borderStyle = {'border-color': "red"};

      }

    }

  }

})();
