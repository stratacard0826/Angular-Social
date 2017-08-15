<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserProfile extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
            'email' => 'required|email',
            'password' => 'filled',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Et Navn er påkrævet',
            'surname.required' => 'Et Efternavn er påkrævet',
            'email.required'  => 'En e-mail er påkrævet',
            'password.required'  => 'Der kræves en adgangskode',
        ];
    }
}
