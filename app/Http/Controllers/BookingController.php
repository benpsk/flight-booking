<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBooking;
use App\Models\Ticket;
use App\Services\BookingService;
use App\Services\CountryService;
use Exception;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function show(Ticket $booking, CountryService $countryService)
    {
        $ticket = $booking->load('origin.city', 'destination.city', 'flight.airline');
        $countries = $countryService->all();
        return Inertia::render('Guest/Booking/Index', [
            'ticket' => $ticket,
            'countries' => $countries
        ]);
    }

    public function store(StoreBooking $request, BookingService $service)
    {
        $input = $request->validated();
        try {
            $booking = $service->store($input);
            return to_route('payments.show', $booking->id);
        } catch (Exception $e) {
            return back()->with('error', 'Something went wrong!');
        }
    }
}
