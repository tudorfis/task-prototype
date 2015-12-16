angular.module('mobileApp.controllers', [])
  .controller('TasksCtrl', function($scope) {})
  .controller('FriendsCtrl', function($scope, Friends) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.friends = Friends.all();
    $scope.remove = function(user) {
      Friends.remove(friend);
    };
  })
  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
