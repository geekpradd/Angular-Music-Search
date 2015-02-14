angular.module('music.controllers',[]).controller('mainController', function($scope,$http){
	$scope.title = "Music Search";
  $scope.songName = '';
  $scope.head ='';
  $scope.meta = [];
  $scope.sub = function(){
    $scope.head = "Song";
    $scope.url = "http://pydictionary-geekpradd.rhcloud.com/music/b/" + encodeURIComponent($scope.songName)
    console.log($scope.url);
    $http.get($scope.url).
    success(function(data, status, headers, config) {
      console.log(data);
      var variable = data;
      variable.Url = decodeURIComponent(data.Url);
      $scope.meta = [variable];
    }).
    error(function(data, status, headers, config) {
      // log error
    });

  }
});