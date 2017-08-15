<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class EmailProfileUpdate extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $dataToSend;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    
    public function __construct(User $user,$dataToSend)
    {
        $this->user = $user;
        $this->dataToSend = $dataToSend;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
//        return $this->view('view.name');
        return $this->view('emails.updateProfile');
    }
}
