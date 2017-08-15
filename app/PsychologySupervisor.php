<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PsychologySupervisor extends Model
{
    protected $table = 'psychologist_supervision';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable  = ['user_id','name','surname','email','address','post','city','phone','special_preparation','special_evidence','special_trained'];
    /**
     * Get the user that has base user info.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
