<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilterTicket;
use App\Services\AirportService;
use App\Services\TicketService;
use Inertia\Inertia;
use Mockery\Undefined;

class HomeController extends Controller
{
    public function __construct(
        protected AirportService $service
    )
    {

    }
    public function index()
    {
        $airports = $this->service->all();
        $tickets = session('tickets', []);
        return Inertia::render('Guest/Home/Index', [
            'airports' => $airports,
            'tickets' => $tickets,
            'is_filter' => session('is_filter'),
        ]);
    }
    public function filter(FilterTicket $request, TicketService $ticketService)
    {
        $tickets = $ticketService->filter();
        return to_route('home')
            ->with('tickets', $tickets)
            ->with('is_filter', true);
    }
}
