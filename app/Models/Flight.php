<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Flight extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = ['name', 'number', 'airline_id'];

    public function airline(): BelongsTo
    {
        return $this->belongsTo(Airline::class);
    }
}
