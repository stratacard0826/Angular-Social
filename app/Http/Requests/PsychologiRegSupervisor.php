<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PsychologiRegSupervisor extends FormRequest
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
            "email" => "required",
            "address" => "required",
            "post" => "required",
            "city" => "required",
            "phone" => "required",
            "special_evidence" => "required",
            "special_trained" => "required",
            "special_preparation" => "required",
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Et Navn er påkrævet',
            'surname.required' => 'Et Efternavn er påkrævet',
            'email.required' => 'En e-mail er påkrævet',
            'address.required' => 'En address er påkrævet',
            'post.required' => 'En post er påkrævet',
            'city.required' => 'En city er påkrævet',
            'phone.required' => 'En phone er påkrævet',
            'special_evidence.required' => 'En special_evidence er påkrævet',
            'special_trained.required' => 'En special trained er påkrævet',
            'special_preparation.required' => 'En special preparation er påkrævet',
        ];
    }
}
