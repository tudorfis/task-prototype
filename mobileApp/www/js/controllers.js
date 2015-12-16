angular.module('mobileApp.controllers', [])
  .controller('TasksCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate) {

    $scope.tasks = [{
        title: 'Car for sale - Bmw X5 - 2003',
        description:
          "Year: 2003 \n" +
          "Usage: 82 000 km \n" +
          "Engine: Diesel \n" +
          "Price: 4200 $ \n",
        image: 'http://img26.olx.ro/images_mercadorro/79055782_1_1000x700_bmw-x6-model-2010-brasov.jpg'
      },{
        title: 'Iphone 6 for sale - never used',
        description:
          "All phones are neverlocked network -libere \n" +
          "All phones are accompanied by data cable and charger (30 days warranty on accessories) \n\n" +
          "All phones are original 100% \n" +
          "They checked down to the smallest detail! \n" +
          "Ensure they do not walk in them! \n" +
          "nsure that there are recarosate \n",
        image: 'http://img34.olx.ro/images_mercadorro/82134472_4_644x461_iphone-6-16gb-negru-neverlocked-electronice-si-electrocasnice_rev012.jpg'
      },{
        title: 'HP Pavilion DV6 / Intel Core i7 / Radeon 6770M 2Gb / Beats Audio',
        description:
          "The laptop looks and works very well! Battery lasts about 5 hours!  \n" +
          "All pictures are real! \n" +
          "It is sold with original charger! \n\n" +
          "Configuration: \n" +
          "Intel Core i7-2630QM 2.9GHz -process (quad core processor with hyperthreading - 8 cores) \n" +
          "Uneven Intel HD 3000 integrated video \n" +
          "Uneven dedicated AMD Radeon HD 6770M video 2GB \n" +
          "500GB -HDD \n" +
          "-6GB DDR3 RAM \n" +
          "15.6 inch LED -DISplay \n" +
          "-Sound Beats Audio",
        image: 'http://img10.olx.ro/images_mercadorro/85754070_8_644x461_hp-pavilion-dv6-intel-core-i7-radeon-6770m-2gb-beats-audio-.jpg'
      }
    ];

    $ionicModal.fromTemplateUrl('new-task.html', function(modal){
      $scope.taskModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.createTask = function(task) {
      $scope.tasks.push({
        title: task.title,
        description: task.description
      });
      $scope.taskModal.hide();
      task.title = '';
      task.description = '';
    };

    $scope.newTask = function() {
      $scope.taskModal.show();
    };

    $scope.closeNewTask = function() {
      $scope.taskModal.hide();
    };

  })
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
