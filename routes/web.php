<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\ConfirmController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('filter', [HomeController::class, 'filter'])->name('filter');
Route::get('/dashboard', DashboardController::class)->middleware(['auth'])->name('dashboard');
Route::resource('bookings', BookingController::class)->only('show','store');
Route::resource('payments', PaymentController::class)->only('show', 'store');
Route::get('confirm/{ticket}', ConfirmController::class)->name('confirm');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
