<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Airport;
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
        Admin::factory()->create([
            'name' => 'Super Admin',
            'email' => 'admin@flight.com',
            'password' => 'password'
        ]);
        Airport::factory(5)->create();
        $this->call([
            TicketSeeder::class,
        ]);
    }
}
