<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Illuminate\Support\Number;

class Ticket extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = ['origin_id', 'destination_id', 'flight_id','date', 'number_of_seat', 'available_seat', 'departure_time', 'arrival_time', 'fee'];

    protected function departureTime(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('H:i')
        );
    }
    protected function arrivalTime(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('H:i')
        );
    }
    protected function fee(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Number::currency($value, 'THB')
        );
    }
    public function origin(): BelongsTo
    {
        return $this->belongsTo(Airport::class, 'origin_id', 'id');
    }

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Airport::class, 'destination_id', 'id');
    }

    public function flight(): BelongsTo
    {
        return $this->belongsTo(Flight::class);
    }
}
