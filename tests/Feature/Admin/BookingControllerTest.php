<?php

namespace Tests\Feature\Admin;

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
        $response = $this->get(route('admin.booking'));
        $response->assertStatus(302);
        $this->assertGuest();
    }
    public function test_user_cannot_access(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
            ->get(route('admin.booking'));
        $response->assertStatus(302);
    }

    public function test_booking_listing_can_rendered(): void
    {
        Booking::factory(10)->create();

        $admin = Admin::factory()->create();
        $response = $this->actingAs($admin, 'admin')
            ->get(route('admin.booking'));
        $response->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Admin/Booking/Index')
                    ->has('booking.data', 10)
            );
    }

}
