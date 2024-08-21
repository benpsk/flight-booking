<?php

namespace Tests\Feature\User;

use App\Models\Admin;
use App\Models\Booking;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class BookingControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_cannot_access(): void
    {
        $response = $this->get(route('booking'));
        $response->assertStatus(302);
        $this->assertGuest();
    }
    public function test_admin_cannot_access(): void
    {
        $admin = Admin::factory()->create();
        $response = $this->actingAs($admin, 'admin')
            ->get(route('booking'));
        $response->assertStatus(302);
    }

    public function test_user_booking_listing_can_rendered(): void
    {
        $user = User::factory()->create();
        Booking::factory(7)->create(['user_id' => $user->id]);

        Booking::factory(10)->create();

        $response = $this->actingAs($user)
            ->get(route('booking'));
        $response->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('User/Booking/Index')
                    ->has('booking.data', 7)
            );
        $this->assertDatabaseCount('bookings', 17);
    }
}
