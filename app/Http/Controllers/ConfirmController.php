<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Inertia\Inertia;

class ConfirmController extends Controller
{
    public function __invoke(Ticket $ticket)
    {
        $ticket->load('origin.city', 'destination.city', 'flight.airline');
        return Inertia::render('Guest/Confirm/Index', [
            'ticket' => $ticket
        ]);
    }
}
