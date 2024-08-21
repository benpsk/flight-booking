<?php

namespace App\Services;

use App\Models\Ticket;

class TicketService
{
    public function filter()
    {
        return Ticket::query()
            ->with('origin.city', 'destination.city', 'flight.airline')
            ->where('origin_id', request('origin_id'))
            ->where('destination_id', request('destination_id'))
            ->whereDate('date', request('date'))
            ->get();
    }
}
