
var app = angular.module('myApp', ['ngRoute']);  

app.service('AuthService', function() {
    var user = JSON.parse(localStorage.getItem('user')) || null;

    this.setUser = function(userData) {
        user = userData;
        localStorage.setItem('user', JSON.stringify(user));
    };

    this.getUser = function() {
        return user;
    };

    this.isAdmin = function() {
        return user && user.is_admin;
    };

    this.logout = function() {
        user = null;
        localStorage.removeItem('user');
    };
});


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { 
            templateUrl: 'MODEL/login.html',
            controller: 'LoginController',
        })
        .when('/home', {
            templateUrl: 'MODEL/home.html',
            controller: 'HomeController'
        })
        .when('/admin/dashboard', {
            templateUrl: 'MODEL/admin_dashboard.html',
            controller: 'AdminDashboardController',
            resolve: {
                auth: function(AuthService, $location) {
                    if (!AuthService.isAdmin()) {
                        $location.path('/home');
                    }
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('LoginController', function($scope, $http, $location, AuthService) {
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
            $scope.errorMessage = ''; 

            AuthService.setUser(response.data.user);
            
            if (response.data.user.is_admin) {
                $location.path('/admin/dashboard');
            } else {
                $location.path('/home');
            }

        }, function(error) {
            console.error('Login failed:', error);
            $scope.errorMessage = error.data.message || 'Login failed, please try again.';
        });
    };
});

app.controller('HomeController', function($scope) {
    $scope.message = "Welcome to the Home page!";
});

app.controller('AdminDashboardController', function($scope, $http, $location, AuthService) {
    if (!AuthService.isAdmin()) {
        $location.path('/home');
        return;
    }

    $scope.dashboardMessage = "Welcome to the Admin Dashboard!";
    $http.get('http://localhost:8000/admin/dashboard').then(function(response) {
        $scope.dashboardMessage = response.data.message || $scope.dashboardMessage;
    }, function(error) {
        console.error('Error accessing admin dashboard:', error);
    });
});