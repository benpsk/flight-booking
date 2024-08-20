<?php

namespace Database\Factories;

use App\Models\Booking;
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
            'name' => fake()->name,
            'passport' => fake()->randomLetter
        ];
    }
}
