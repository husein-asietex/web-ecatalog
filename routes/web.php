<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Inertia\Inertia;

Route::inertia('/', 'index')->name('main');

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'show'])->name('login');
    
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
    
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    })->name('dashboard');
});