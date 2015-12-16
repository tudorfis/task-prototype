angular.module('mobileApp.services', [])
  .factory('Friends', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [{
      id: 0,
      name: 'Bolca Dorian',
      lastText: 'Journalist',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Uwe Dai',
      lastText: 'Judo Instructor',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Tao Robert',
      lastText: 'Public Speaker',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Dragos Garneata',
      lastText: 'Assitant Manager',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mihai Gabriel',
      lastText: 'Profesor',
      face: 'img/mike.png'
    }];

    return {
      all: function() {
        return friends;
      },
      remove: function(friend) {
        friends.splice(friends.indexOf(friend), 1);
      },
      get: function(friendId) {
        for (var i = 0; i < friends.length; i++) {
          if (friends[i].id === parseInt(friendId)) {
            return friends[i];
          }
        }
        return null;
      }
    };
  });
