var app = angular.module('app', []);

app.controller('UserController', function($scope, $http) {
    $http.get('http://localhost:8000/api/users')
        .then(function(response) {
            $scope.users = response.data;
        })
        .catch(function(error) {
            console.error("Ada kesalahan: ", error);
        });
});
