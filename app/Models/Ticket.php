<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = ['origin', 'destination', 'date', 'number_of_seat', 'available_seat', 'departure_time', 'arrival_time'];
}
