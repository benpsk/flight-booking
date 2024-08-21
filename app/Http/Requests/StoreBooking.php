<?php

namespace App\Http\Requests;

use App\Enums\Gender;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBooking extends FormRequest
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
            'ticket_id' => 'required|exists:tickets,id',
            'first_name' => 'required|string|max:125',
            'last_name' => 'required|string|max:125',
            'phone_no' => 'required|numeric|digits_between:8,14',
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255'],
            'passenger.gender' => ['required', Rule::enum(Gender::class)],
            'passenger.first_name' => 'required|string|max:125',
            'passenger.last_name' => 'required|string|max:125',
            'passenger.dob' => 'required|date|before:-18 years',
            'passenger.country_id' => 'required|exists:countries,id',
        ];
    }
    public function messages()
    {
        return [
            'passenger.dob.before' => 'The of passenger must be 18 years old.',
        ];
    }
}
