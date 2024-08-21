<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilterTicket extends FormRequest
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
            'origin_id' => 'required|exists:airports,id',
            'destination_id' => 'required|exists:airports,id',
            'date' => 'required|date|after_or_equal:today',
        ];
    }
    public function messages()
    {
        return [
            'origin_id.required' => 'The origin is required.',
            'origin_id.destination_id' => 'The destination is required.',
        ];
    }
}
