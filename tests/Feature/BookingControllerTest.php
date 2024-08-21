<?php

namespace Tests\Feature;

use App\Enums\Gender;
use App\Models\Country;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class BookingControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_booking_page_can_rendered(): void
    {
        $ticket = Ticket::factory()->create(); //origin => 1, destination => 1,
        Country::factory(10)->create(); // 10

        $response = $this->get(route('bookings.show', $ticket->id));
        $response->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Guest/Booking/Index')
                    ->has('countries', 12)
                    ->has('ticket')
                    ->has('ticket.origin.city')
                    ->has('ticket.destination.city')
                    ->has('ticket.flight.airline')
            );
    }

    public static function invalidData(): array
    {
        return [
            [
                'data' => [
                    'ticket_id' => '',
                    'first_name' => '',
                    'last_name' => '',
                    'phone_no' => '',
                    'email' => '',
                    'passenger' => [
                        'gender' => '',
                        'first_name' => '',
                        'last_name' => '',
                        'dob' => '',
                        'country_id' => '',
                    ],
                ],
                'errors' => ['ticket_id', 'first_name', 'last_name', 'phone_no', 'email', 'passenger.gender', 'passenger.first_name', 'passenger.last_name', 'passenger.dob', 'passenger.country_id'],
            ],
            [
                'data' => [
                    'ticket_id' => '',
                    'first_name' => 'Jeff',
                    'last_name' => 'Clay',
                    'phone_no' => '098373733',
                    'email' => 'jeff',
                    'passenger' => [
                        'gender' => 'hello',
                        'first_name' => 'first',
                        'last_name' => 'last ',
                        'dob' => today(),
                        'country_id' => 'non',
                    ],
                ],
                'errors' => ['ticket_id', 'email', 'passenger.gender', 'passenger.dob', 'passenger.country_id'],
            ],
        ];
    }

    #[DataProvider('invalidData')]
    public function test_invalid_booking_data_store_failed($data, $errors): void
    {
        $response = $this->post(route('bookings.store'), $data);
        $response->assertStatus(302)
            ->assertSessionHasErrors($errors);
    }

    public function test_booking_store_success(): void
    {
        $ticket = Ticket::factory()->create();
        $country = Country::factory()->create();
        $passenger = [
            'gender' => Gender::male,
            'first_name' => 'jeff',
            'last_name' => 'clay',
            'dob' => '2000-01-01',
            'country_id' => $country->id,
        ];
        $data = [
            'ticket_id' => $ticket->id,
            'first_name' => 'jeff',
            'last_name' => 'clay',
            'phone_no' => '09837373733',
            'email' => 'jeff@mail.com',
            'passenger' => $passenger
        ];
        $response = $this->post(route('bookings.store'), $data);
        $response->assertSessionHasNoErrors()
            ->assertRedirect();
        unset($data['passenger']);
        $this->assertDatabaseHas('bookings', $data);
        $this->assertDatabaseHas('passengers', $passenger);
    }

    public function test_booking_store_with_user_login_success(): void
    {
        $user = User::factory()->create();
        $ticket = Ticket::factory()->create();
        $country = Country::factory()->create();
        $passenger = [
            'gender' => Gender::male,
            'first_name' => 'jeff',
            'last_name' => 'clay',
            'dob' => '2000-01-01',
            'country_id' => $country->id,
        ];
        $data = [
            'ticket_id' => $ticket->id,
            'first_name' => 'jeff',
            'last_name' => 'clay',
            'phone_no' => '09837373733',
            'email' => 'jeff@mail.com',
            'passenger' => $passenger
        ];
        $response = $this->actingAs($user)
            ->post(route('bookings.store'), $data);
        $response->assertSessionHasNoErrors()
            ->assertRedirect();
        unset($data['passenger']);
        $data['user_id'] = $user->id;
        $this->assertDatabaseHas('bookings', $data);
        $this->assertDatabaseHas('passengers', $passenger);
    }
}
