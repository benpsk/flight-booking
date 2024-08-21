<?php

namespace Tests\Feature;

use App\Models\Booking;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class PaymentControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_payment_page_can_rendered(): void
    {
        $booking = Booking::factory()->create();
        $response = $this->get(route('payments.show', $booking->id));
        $response->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Guest/Payment/Index')
                    ->has('booking')
                    ->has('booking.ticket.origin.city')
                    ->has('booking.ticket.destination.city')
                    ->has('booking.ticket.flight.airline')
            );
    }

    public static function invalidData(): array
    {
        return [
            [
                'data' => [
                    'booking_id' => '',
                    'card_holder_name' => '',
                    'card_no' => '',
                    'cvc' => '',
                    'expiry_date' => '',
                ],
                'errors' => ['booking_id', 'card_holder_name', 'card_no', 'cvc', 'expiry_date']
            ],
            [
                'data' => [
                    'booking_id' => '',
                    'card_holder_name' => 'jeff clay',
                    'card_no' => '292838373',
                    'cvc' => '2033',
                    'expiry_date' => '293930',
                ],
                'errors' => ['booking_id', 'expiry_date']
            ],
            [
                'data' => [
                    'booking_id' => '',
                    'card_holder_name' => 'jeff clay',
                    'card_no' => '292838373',
                    'cvc' => '2033',
                    'expiry_date' => '30/30',
                ],
                'errors' => ['booking_id', 'expiry_date']
            ],
            [
                'data' => [
                    'booking_id' => '',
                    'card_holder_name' => 'jeff clay',
                    'card_no' => '292838373',
                    'cvc' => '2033',
                    'expiry_date' => '01/23',
                ],
                'errors' => ['booking_id', 'expiry_date']
            ],
        ];
    }

    #[DataProvider('invalidData')]
    public function test_invalid_payment_failed($data, $errors): void
    {
        $response = $this->post(route('payments.store'), $data);
        $response->assertStatus(302)
            ->assertSessionHasErrors($errors);
    }

    public function test_payment_store_success(): void
    {
        $booking = Booking::factory()->create();
        $data = [
            'booking_id' => $booking->id,
            'card_holder_name' => 'jeff clay',
            'card_no' => '292838373',
            'cvc' => '2033',
            'expiry_date' => '01/27',
        ];
        $response = $this->post(route('payments.store'), $data);
        $response->assertSessionHasNoErrors()
            ->assertRedirect();
        $this->assertDatabaseHas('payments', $data);
    }
}
