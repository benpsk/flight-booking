<?php

namespace Database\Seeders;

use App\Models\Airport;
use App\Models\Flight;
use App\Models\Ticket;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        Airport::factory(5)->create();
        $ids = Airport::oldest('id')->pluck('id')->toArray();
        $airports = [];
        for ($i = 0; $i < 5; $i++) {
            for ($j = 0; $j < 5; $j++) {
                if ($i == $j) continue;
                $airports[] = ['origin_id' => $ids[$i], 'destination_id' => $ids[$j]];
            }
        }
        foreach ($airports as $airport) {
            $date = today()->addDay();
            $limit = today()->addDay(10);
            while ($date <= $limit) {
                $is = fake()->randomElement([true, false]);
                if ($is) {
                    $date->addDay();
                    continue;
                }
                $count = fake()->numberBetween(2, 6);
                Ticket::factory($count)->create(['origin_id' => $airport['origin_id'], 'destination_id' => $airport['destination_id'], 'date' => $date]);
                $date->addDay();
            }
        }
    }
}
