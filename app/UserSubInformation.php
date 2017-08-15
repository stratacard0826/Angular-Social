<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSubInformation extends Model
{
    protected $table = 'user_information';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable  = ['address','post','city','phone','special_preparation','avatar_path'];
    /**
     * Get the user that has base user info.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
