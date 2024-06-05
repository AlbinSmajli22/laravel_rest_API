<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Symfony\Contracts\Service\Attribute\Required;

class StoreBookRequest extends FormRequest
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
          
            'title'=> 'required|string|max:200',
            'author'=> 'required|string|max:200',
            'publication_year' =>'required|date',
            'ISBN' =>'required|string|max:13',
            'no_in_stock'=> 'required|integer',
        ];
    }
}
