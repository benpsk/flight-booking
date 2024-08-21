<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Guest/Payment/Index');
    }
}
