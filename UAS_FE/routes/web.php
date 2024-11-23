<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('home');
});

// Route login untuk menghasilkan token
Route::post('/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'index']);
Route::middleware('auth:sanctum')->post('/products/{productId}/ratings', [ProductController::class, 'addRating']);
Route::middleware('auth:sanctum')->get('/products/{productId}/ratings', [ProductController::class, 'getRatings']);
Route::middleware('auth:sanctum')->delete('products/{productId}/rating/{ratingId}', [ProductController::class, 'destroyRating']);

Route::middleware('auth:sanctum')->get('/products', [ProductController::class, 'index']);
Route::middleware('auth:sanctum')->get('/products/{id}', [ProductController::class, 'find']);
Route::middleware('auth:sanctum')->post('/products', [ProductController::class, 'create']);
Route::middleware('auth:sanctum')->put('/products/{id}', [ProductController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/products/{id}', [ProductController::class, 'destroy']);

Route::get('/test', [App\Http\Controllers\Api\TestController::class, 'index']);