<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('home');
});

Route::post('/login', [UserController::class, 'login']);
Route::get('/login', function () {
    return response()->make(file_get_contents('C:\Kuliah\SEMS3\FRONTEND\UAS\UAS_FE\UAS_FE_ANGULARJS\index.html'));
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', [UserController::class, 'index']);
});
Route::post('/products/{productId}/ratings', [ProductController::class, 'addRating']);
Route::get('/products/{productId}/ratings', [ProductController::class, 'getRatings']);
Route::delete('products/{productId}/rating/{ratingId}', [ProductController::class, 'destroyRating']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'find']);
Route::post('/products', [ProductController::class, 'create']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

Route::get('/test', [App\Http\Controllers\Api\TestController::class, 'index']);