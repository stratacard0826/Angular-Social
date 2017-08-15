<?php

namespace App\Http\Controllers;

use App\Http\Requests\PsychologiRegSupervisor;
use App\Http\Requests\UpdateUserProfile;
use App\ImageModel;
use App\PsychologySupervisor;
use App\User;
use Illuminate\Http\Request;
use MongoDB\Driver\Exception\ExecutionTimeoutException;

class ApplicationController extends Controller
{

    private $imageModel;
    private $userModel;
    private $psychologySupervisorModel;

    public function __construct()
    {
        $this->imageModel = new ImageModel();
        $this->userModel = new User();
        $this->psychologySupervisorModel = new PsychologySupervisor();
    }

    /**
     * @return all information about user
     */
    public function getInformation()
    {
        $informationAboutUser = \App\User::with('fullInfoAboutUser', 'roles')->find(\Auth::user()->id);
        return $informationAboutUser;
    }

    /**
     * Update user profile data
     */
    public function updateInformation(UpdateUserProfile $request)
    {
        try {
            $this->userModel->updateProfile($request);
        } catch (\Exception $ex) {
            return (new \Illuminate\Http\Response)->setStatusCode(409, $ex->getMessage());
        }
        return (new \Illuminate\Http\Response)->setStatusCode(200, 'The profile is updated successfully!');
    }

    /**
     * Upload user profile avatar
     */
    public function imageUploadPost(Request $request)
    {
        $this->validate($request, ['image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',]);
        return $this->imageModel->uploadUserProfileAvatar($request);
    }

    /**
     * delete user profile avatar
     */
    public function deleteUserAvatar()
    {
        $this->imageModel->deleteUserAvatar();
        return (new \Illuminate\Http\Response)->setStatusCode(200, 'User avatar was deleted!');
    }

    /**
     * register supervisor to psychology
     */
    public function registrationSupervisor(PsychologiRegSupervisor $request)
    {
        $data = $request->all();
        $data['user_id'] = \Auth::user()->id;
        $this->psychologySupervisorModel->create($data);
        return (new \Illuminate\Http\Response)->setStatusCode(200, 'The supervisor successfully created!');
    }

    /**
     *find supervisor for psychology
     */
    public function searchSupervisor(Request $request)
    {
        $this->validate($request, ['find' => 'required']);
        $query = $request->find;
        $search = PsychologySupervisor::where('name', 'LIKE', '%' . $query . '%')->orWhere('surname', 'LIKE', '%' . $query . '%')->get();
        return $search;
    }
}
