'use strict';

angular.module('mrkgWishesApp')
  .controller('MainCtrl', function ($scope, $http, $location) {

    $scope.randomWish = function() {
      $http.get('/api/randomWish').success(function(wish) {
         $scope.wish = wish;
         $scope.showPage = true;
         $location.search({w: wish._id});
      });
    }; // End function randomWish

    $scope.loadWish = function(id) {
      $http.get('/api/loadWish/'+id).success(function(wish) {
        $scope.wish = wish;
        $scope.showPage = true;
      });
    }; // End function loadWish()

    $scope.addWish = function() {
      if ( $scope.submitWish && $scope.submitWish.moreFocus && $scope.submitWish.name ) {
        $http.post('/api/addWish', $scope.submitWish).success(function(data) {
          $scope.wish = data;
          $scope.submitEmail = true;
          $location.search({ w: data._id});
       });
      }
    }; // End function addWish()

    $scope.addEmail = function() {
      if ( $scope.email ) {
        $scope.wish.email = $scope.email;
        $http.post('/api/updateWish', $scope.wish).success(function(data) {
          $scope.thankyou = true;
        });
      }
    }; // End function addEmail

    var query = $location.search();
    if ( query.w ) {
      $scope.loadWish(query.w);
    }
    else {
      $scope.randomWish();
    }

  });
