<?php

namespace App\Services;

use App\Models\Payment;

class PaymentService
{
    public function store(array $input)
    {
        return Payment::create($input);
    }
}
