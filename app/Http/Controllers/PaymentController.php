<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVisaPayment;
use App\Models\Booking;
use App\Services\PaymentService;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function show(Booking $payment)
    {
        $booking = $payment->load('ticket.origin.city', 'ticket.destination.city', 'ticket.flight.airline', 'passengers');
        return Inertia::render('Guest/Payment/Index', [
            'booking' => $booking
        ]);
    }

    public function store(StoreVisaPayment $request, PaymentService $service)
    {
        $input = $request->validated();
        /// only store the payment info [with separate table] when the user is log in
        // else dont save [holder name, card no, ...]
        $payment = $service->store($input);
        $ticket = $payment->booking->ticket;
        return to_route('confirm', $ticket->id);
    }
}
