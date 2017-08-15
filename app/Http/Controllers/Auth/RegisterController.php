<?php

namespace App\Http\Controllers\Auth;

use App\Role;
use App\User;
use App\UserSubInformation;
use Session;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;
use DB;
use Mail;
use App\Mail\EmailVerification;
use App\Helpers\Enum_Roles;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     *  Over-ridden the register method from the "RegistersUsers" trait
     *  Remember to take care while upgrading laravel
     */
    public function register(Request $request)
    {
        // Laravel validation

        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            $this->throwValidationException($request, $validator);
        }
        // Using database transactions is useful here because stuff happening is actually a transaction
        // I don't know what I said in the last line! Weird!
        DB::beginTransaction();
        try {
            $user = $this->create($request->all());
            // After creating the user send an email with the random token generated in the create method above
            $email = new EmailVerification($user);
            Mail::to($user->email)->send($email);
            //Create user Role
            $this->registered($request->all(), $user);
            DB::commit();
            Session::flash('confirmingAccount', 'Et brev, der bekræfter den konto sendt til din email');
            return redirect('/');
        } catch (Exception $e) {
            DB::rollback();
            return redirect('/');
        }
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm($userRole)
    {
        return view('auth.register', compact("userRole"));
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {

        return User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'email_token' => str_random(10),
        ]);
    }

    // Get the user who has the same token and change his/her status to verified i.e. 1
    public function verify($token)
    {
        // The verified method has been added to the user model and chained here
        // for better readability
        $user = User::where('email_token', $token)->firstOrFail();
        User::where('email_token', $token)->firstOrFail()->verified();
        if ($user != null) {
            $newSubInformationUser = new UserSubInformation();
            $newSubInformationUser->user_id = $user->id;
            $newSubInformationUser->special_preparation = 'default';
            $newSubInformationUser->save();
        }
        Session::flash('successfullyActivated', 'Konto aktiveret');
        return redirect('login');
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  mixed $user
     * @return mixed
     */
    protected function registered($request, $user)
    {

        $userRole = $request['role'];
        if ($userRole == Enum_Roles::COURSE_ORGANIZER) {
            $courseOrganizer = Role::where('name', '=', Enum_Roles::COURSE_ORGANIZER)->first();
            $user->attachRole($courseOrganizer);
        } elseif ($userRole == Enum_Roles::SUPERVISOR) {
            $supervisor = Role::where('name', '=', Enum_Roles::SUPERVISOR)->first();
            $user->attachRole($supervisor);
        } else {
            //default role from form Psychologist
            $psychologist = Role::where('name', '=', Enum_Roles::PSYCHOLOGIST)->first();
            $user->attachRole($psychologist);
        }

    }
}
