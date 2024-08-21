<?php

namespace App\Services;

use App\Enums\BookingStatus;
use App\Models\Booking;
use App\Models\Passenger;
use Exception;
use Illuminate\Support\Facades\DB;

class BookingService
{
    public function store(array $input)
    {
        $input['status'] = BookingStatus::paid;
        $input['user_id'] = auth()->user()->id ?? null;
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
