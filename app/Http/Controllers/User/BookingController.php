<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\BookingService;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function __invoke(BookingService $service)
    {
        $booking = $service->paginateByUser();
        return Inertia::render('User/Booking/Index', [
            'booking' => $booking
        ]);
    }
}
