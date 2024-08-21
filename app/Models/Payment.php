<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = ['booking_id', 'card_holder_name', 'card_no', 'expiry_date', 'cvc', 'status'];

    protected function cardHolderName(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => decryption($value),
            set: fn(string $value) => encryption($value),
        );
    }
    protected function cardNo(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => decryption($value),
            set: fn(string $value) => encryption($value),
        );
    }
    protected function expiryDate(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => decryption($value),
            set: fn(string $value) => encryption($value),
        );
    }
    protected function cvc(): Attribute
    {
        return Attribute::make(
            get: fn(string $value) => decryption($value),
            set: fn(string $value) => encryption($value),
        );
    }

    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking::class);
    }
}
