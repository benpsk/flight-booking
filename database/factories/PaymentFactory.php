<?php

namespace Database\Factories;

use App\Models\Booking;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'booking_id' => Booking::factory(),
            'card_holder_name' => fake()->name,
            'card_no' => fake()->creditCardNumber,
            'expiry_date' => fake()->creditCardExpirationDateString,
            'cvc' => fake()->domainName
        ];
    }
}
