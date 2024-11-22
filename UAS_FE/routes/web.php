<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;

Route::get('/', function () {
    return view('home');
});

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'create']);

Route::post('/products/{productId}/ratings', [ProductController::class, 'addRating']);
Route::get('/products/{productId}/ratings', [ProductController::class, 'getRatings']);
Route::delete('products/{productId}/rating/{ratingId}', [ProductController::class, 'destroyRating']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'find']);
Route::post('/products', [ProductController::class, 'create']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

Route::get('/test', [App\Http\Controllers\Api\TestController::class, 'index']);
