var app = angular.module('myApp', ['ngRoute']);  // Add 'ngRoute' dependency



app.config(function($routeProvider) {
    // Define routes
    $routeProvider
        .when('/', {  // Default route for the login page
            templateUrl: 'MODEL/login.html',
            controller: 'LoginController'
        })
        .when('/home', {
            templateUrl: 'producthome.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('MainController', function($scope) {

});

app.controller('LoginController', function($scope, $http, $location) {
    $scope.email = '';
    $scope.password = '';
    $scope.errorMessage = '';

    $scope.login = function() {
        if (!$scope.email || !$scope.password) {
            $scope.errorMessage = "Please enter both email and password.";
            return;
        }

        $http.post('http://localhost:8000/login', {
            email: $scope.email,
            password: $scope.password
        }).then(function(response) {
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token); 
            $scope.errorMessage = ''; 
            alert('Login successful! Token saved.');

            $location.path('/home');
        }, function(error) {
            console.error('Login failed:', error);
            $scope.errorMessage = error.data.message || 'Login failed, please try again.';
        });
    };
});

app.controller('HomeController', function($scope) {
    $scope.message = "Welcome to the Home page!";
});
