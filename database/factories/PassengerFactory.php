<?php

namespace Database\Factories;

use App\Enums\Gender;
use App\Models\Booking;
use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Passenger>
 */
class PassengerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
    // protected $fillable = ['booking_id', 'name', 'passport'];
        return [
            'booking_id' => Booking::factory(),
            'first_name' => fake()->firstName,
            'last_name' => fake()->lastName,
            'dob' => fake()->date('-18 year'),
            'country_id' => Country::factory(),
            'gender' => fake()->randomElement(Gender::all()),
        ];
    }
}
