var app = angular.module('myApp', ['ngRoute']);  

app.config(function($routeProvider, $httpProvider) {
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
        })
        .otherwise({
            redirectTo: '/'
        });

    $httpProvider.interceptors.push('AuthInterceptor');
});

app.factory('AuthInterceptor', function($q) {
    return {
        request: function(config) {
            var token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        },
        responseError: function(response) {
            if (response.status === 401) {
                window.location.href = '/login';
            }
            return $q.reject(response);
        }
    };
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

app.controller('AdminDashboardController', function($scope, $http) {
    $scope.dashboardMessage = "Welcome to the Admin Dashboard!";
    $http.get('http://localhost:8000/admin/dashboard').then(function(response) {
        $scope.dashboardMessage = response.data.message || $scope.dashboardMessage;
    }, function(error) {
        console.error('Error accessing admin dashboard:', error);
    });
});
