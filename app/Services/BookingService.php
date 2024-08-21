<?php

namespace App\Services;

use App\Enums\BookingStatus;
use App\Models\Booking;
use App\Models\Passenger;
use Exception;
use Illuminate\Support\Facades\DB;

class BookingService
{
    public function paginate()
    {
        return Booking::with('ticket.origin.city', 'ticket.destination.city', 'ticket.flight.airline')
            ->paginate(request('perPage', 10));
    }

    public function paginateByUser()
    {
        $user_id = auth()->user()->id ?? null;
        return Booking::with('ticket.origin.city', 'ticket.destination.city', 'ticket.flight.airline')
            ->where('user_id', $user_id)
            ->paginate(request('perPage', 10));
    }

    public function store(array $input)
    {
        $input['status'] = BookingStatus::paid;
        $input['user_id'] = auth('web')->user()->id ?? null;
        try {
            DB::beginTransaction();
            // auto approve for now
            $booking = Booking::create($input);
            $passenger = $input['passenger'];
            $passenger['booking_id'] = $booking->id;
            Passenger::create($passenger);
            DB::commit();
            return $booking;
        } catch (Exception $e) {
            DB::rollBack();
            logger($e->getMessage());
            throw $e;
        }
    }
}
