<?php

namespace App\Models;

use App\Enums\BookingStatus;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Booking extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = ['ticket_id', 'first_name', 'last_name', 'email', 'phone_no', 'status', 'user_id'];

    protected function casts(): array
    {
        return [
            'status' => BookingStatus::class,
        ];
    }
    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }
    public function passengers(): HasMany
    {
        return $this->hasMany(Passenger::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
