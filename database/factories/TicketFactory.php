<?php

namespace Database\Factories;

use App\Models\Airport;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $seat = fake()->randomElement([50, 60, 70, 80]);
        return [
            'origin' => Airport::factory(),
            'destination' => Airport::factory(),
            'date' => fake()->date,
            'number_of_seat' => $seat,
            'available_seat' => $seat,
            'departure_time' => fake()->time,
            'arrival_time' => fake()->time,
        ];
    }
}
