<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\BookingService;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function __invoke(BookingService $service)
    {
        $booking = $service->paginate();
        return Inertia::render('Admin/Booking/Index', [
            'booking' => $booking
        ]);
    }
}
