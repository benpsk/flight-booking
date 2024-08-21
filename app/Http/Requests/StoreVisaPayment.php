<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVisaPayment extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'booking_id' => 'required|exists:bookings,id',
            'card_holder_name' => 'required|string|max:125',
            'card_no' => 'required|string|max:125',
            'cvc' => 'required|string|max:125',
            'expiry_date' => [
                'required',
                'regex:/^(0[1-9]|1[0-2])\/([0-9]{2})$/',
                function ($attribute, $value, $fail) {
                    $dateParts = explode('/', $value);
                    if (count($dateParts) !== 2) {
                        $fail('The expiry date format is invalid.');
                        return;
                    }
                    [$month, $year] = $dateParts;
                    $month = (int) $month;
                    $year = (int) $year;
                    $currentYear = (int) date('y');
                    $currentMonth = (int) date('m');
                    if ($year < $currentYear || ($year == $currentYear && $month < $currentMonth)) {
                        $fail('The expiry date is invalid or has already expired.');
                    }
                },
            ],
        ];
    }
}
