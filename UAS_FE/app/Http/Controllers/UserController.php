<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{
 // UserController.php

public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = Auth::user();

        // Hapus semua token lama
        $user->tokens = [];
        $user->save(); // Pastikan untuk menyimpan perubahan ini

        // Buat token baru
        $token = Str::random(60);
        $user->push('tokens', $token); // Tambahkan token baru ke array

        return response()->json([
            'message' => 'Login berhasil',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }

    return response()->json(['message' => 'Email atau password salah'], 401);
}


    public function index()
    {
        // $users = User::all(['name']);
        $users = User::select('name', 'email')->get();
        
        return response()->json($users);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ], 201);
    }
}