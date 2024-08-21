<?php

namespace Tests\Feature;

use App\Models\Airport;
use App\Models\Ticket;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class HomeControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_can_rendered(): void
    {
        $response = $this->get(route('home'));
        $response->assertStatus(200);
    }

    public function test_home_page_show_flights_for_filter(): void
    {
        $count = 10;
        Airport::factory($count)->create();
        $response = $this->get(route('home'));
        $response->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Guest/Home/Index')
                    ->has('airports', $count)
            );
    }
    public static function invalidFilterData(): array
    {
        return [
            [
                'data' => [
                    'origin_id' => '',
                    'destination_id' => '',
                    'date' => '',
                ],
                'errors' => ['origin_id', 'destination_id', 'date'],
            ],
            [
                'data' => [
                    'origin_id' => 'string',
                    'destination_id' => 'string',
                    'date' => 'hello',
                ],
                'errors' => ['origin_id', 'destination_id', 'date'],
            ],
        ];
    }

    #[DataProvider('invalidFilterData')]
    public function test_filter_with_invalidate_data_failed($data, $errors): void
    {
        $response = $this->post(route('filter'), $data);
        $response->assertSessionHasErrors($errors);
    }
    public function test_filter_redirect_to_home(): void
    {
        $origin = Airport::factory()->create();
        $destination = Airport::factory()->create();
        $date = today();
        $input = [
            'origin_id' => $origin->id,
            'destination_id' => $destination->id,
            'date' => $date,
        ];
        $response = $this->post(route('filter'), $input);
        $response->assertRedirectToRoute('home');
    }
    public function test_filter_success(): void
    {
        $origin = Airport::factory()->create();
        $destination = Airport::factory()->create();
        $date = today();
        $input = [
            'origin_id' => $origin->id,
            'destination_id' => $destination->id,
            'date' => $date,
        ];
        Ticket::factory(5)->create($input);
        // create random ticket to ensure the reuslt is accurate.
        Ticket::factory(10)->create();

        $response = $this->post(route('filter'), $input);
        $response->assertSessionHas('tickets', function ($tickets) {
            return count($tickets) == 5;
        });
    }
}
