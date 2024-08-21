<?php

namespace App\Services;

use App\Models\Country;

class CountryService
{
    public function all()
    {
        return Country::all();
    }
}
