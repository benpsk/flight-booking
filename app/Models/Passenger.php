<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    use HasFactory, HasUuids;
    // let's pretend this is a visa payment
    protected $fillable = ['booking_id', 'first_name', 'last_name', 'dob', 'country_id', 'gender'];

}
