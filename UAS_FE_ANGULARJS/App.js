var app = angular.module('myApp', ['ngRoute'])
    .constant("CSRF_TOKEN", document.querySelector('meta[name="csrf-token"]').getAttribute('content'));


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
            templateUrl: 'MODEL/dashboard.html',
            controller: 'DashboardController',
            resolve: {
                auth: function(AuthService, $location) {
                    if (!AuthService.isAdmin()) {
                        $location.path('/home');
                    }
                }
            }
        })
        .when('/add-admin', {
            templateUrl: 'MODEL/add-admin.html', 
            controller: 'AddAdminController'
        })
        .when('/remove-admin', {
            templateUrl: 'MODEL/remove-admin.html', 
            controller: 'RemoveAdminController'
        })
        .when('/remove-user', {
            templateUrl: 'MODEL/remove-user.html', 
            controller: 'RemoveUserController'
        })
        .when('/add-product', {
            templateUrl: 'MODEL/addProduct.html', 
            controller: 'AddProductController'
        })
        .when('/remove-product', {
            templateUrl: 'MODEL/remove-product.html', 
            controller: 'RemoveProductController'
        })
        .when('/edit-product', {
            templateUrl: 'MODEL/edit-product.html',
            controller: 'EditProductController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('AddProductController', function($scope, $http, $location, AuthService) {
    // Inisialisasi properti produk
    $scope.product = {
        name: '',
        price: null,
        description: '',
        stock: null,
        image: ''
    };
    
    // Pesan kesalahan untuk ditampilkan jika ada kegagalan
    $scope.errorMessage = '';

    // Fungsi untuk menambahkan produk
    $scope.createProduct = function () {
        // Validasi input sebelum mengirimkan data ke server
        if (!$scope.product.name || !$scope.product.price || !$scope.product.stock) {
            $scope.errorMessage = 'Name, Price, and Stock are required fields.';
            return;
        }
        
        // Kirim permintaan POST ke server
        $http.post('http://localhost:8000/products', $scope.product, {
              headers: {
                'X-CSRF-TOKEN': CSRF_TOKEN 
            }
        }).then(function (response) {
            console.log('Product added successfully:', response.data);

            // Reset form setelah berhasil
            $scope.product = {
                name: '',
                category: '',
                description: '',
                price: null,
                stock: null,
            };

            $scope.errorMessage = ''; // Reset pesan kesalahan
            $location.path('/products'); // Redirect ke halaman produk
        }).catch(function (error) {
            console.error('Failed to add product:', error);

            // Tampilkan pesan kesalahan dari server atau gunakan pesan default
            $scope.errorMessage = error.data?.message || 'Failed to add product. Please try again.';
        });
    };
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