<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;
use App\Helpers\MailSender;


class User extends Authenticatable
{
    use Notifiable;
    use EntrustUserTrait;

    /**
     * The attributes that are mass assignable.
     *sss
     * @var array
     */
    protected $fillable = [
        'name', 'surname', 'email', 'password', 'email_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    // Set the verified status to true and make the email token null
    public function verified()
    {
        $this->verified = 1;
        $this->email_token = null;
        $this->save();
    }

    /**
     * return full name User
     */
    public function getFullName()
    {
        return $this->name . " " . $this->surname;
    }

    /**
     * Get the full info about user record associated with the user.
     */
    public function fullInfoAboutUser()
    {
        return $this->hasOne(UserSubInformation::class);
    }

    /**
     * Get all supervisor belongs to user
     */
    public function userSupervisors()
    {
        return $this->hasOne(PsychologySupervisor::class);
    }

    /**
     * update User profile
     */
    public function updateProfile($request)
    {
        $user = \App\User::find(\Auth::user()->id);
        MailSender::sendMailWhenChangeProfile($request);
        $user->update([
            'name' => $request->name, 
            'surname' => $request->surname, 
            'email' => $request->email, 
            'password' => ($request->password != null) ? bcrypt($request->password) : $user->password]);
        if ($user->fullInfoAboutUser != null) {
            $user->fullInfoAboutUser()->update([
                'address' => $request->address, 
                'post' => $request->post, 
                'city' => $request->city, 
                'phone' => $request->phone,
                'special_preparation' => $request->special_preparation]);
        } else {
            $user->fullInfoAboutUser()->create([
                'address' => $request->address, 
                'post' => $request->post,
                'city' => $request->city,
                'phone' => $request->phone, 
                'special_preparation' => $request->special_preparation]);
        }
        $user->save();
    }

}
