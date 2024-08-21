<?php

namespace Database\Factories;

use App\Models\Airport;
use App\Models\Flight;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

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
        $times = [
            ['departure' => '08:15:00', 'arrival' => '10:30:00'],
            ['departure' => '09:00:00', 'arrival' => '11:45:00'],
            ['departure' => '10:30:00', 'arrival' => '12:00:00'],
            ['departure' => '11:00:00', 'arrival' => '13:20:00'],
            ['departure' => '12:15:00', 'arrival' => '14:45:00'],
            ['departure' => '13:30:00', 'arrival' => '15:50:00'],
            ['departure' => '14:00:00', 'arrival' => '16:10:00'],
            ['departure' => '15:15:00', 'arrival' => '17:25:00'],
            ['departure' => '16:00:00', 'arrival' => '18:30:00'],
            ['departure' => '17:45:00', 'arrival' => '19:50:00'],
        ];
        $time = fake()->randomElement($times);
        return [
            'origin_id' => Airport::factory(),
            'destination_id' => Airport::factory(),
            'flight_id' => Flight::factory(),
            'date' => fake()->dateTimeBetween('now', '+10 days'),
            'fee' => fake()->numberBetween(1000, 5000),
            'number_of_seat' => $seat,
            'available_seat' => $seat,
            'departure_time' => $time['departure'],
            'arrival_time' => $time['arrival']
        ];
    }
}
