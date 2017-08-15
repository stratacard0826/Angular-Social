<?php

namespace App\Helpers;

use App\Mail\EmailProfileUpdate;
use Mail;

class MailSender
{
    public static function sendMailWhenChangeProfile($request)
    {

        if ($request->name != null ||$request->surname != null || $request->email != null) {
            $user = \Auth::user();
            $dataToSend = [];
            if ($user->name != $request->name) {
                array_push($dataToSend, $request->name);
                $dataToSend['name'] = $request->name;
            }
            if ($user->surname != $request->surname) {
                array_push($dataToSend, $request->surname);
                $dataToSend['surname'] = $request->surname;
            }
            if ($user->email != $request->email) {
                $dataToSend['email'] = $request->email;
            }
            if (count($dataToSend) > 0) {
                $email = new EmailProfileUpdate($user, $dataToSend);
                Mail::to($user->email)->send($email);
            }
        }

    }
}