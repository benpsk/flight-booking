<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ConfirmController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Guest/Confirm/Index');
    }
}
