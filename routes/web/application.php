<?php
//Only auth user can see this pages
Route::group(['middleware' => 'auth'], function () {
    Route::get('/application', function () {return view('application.dashboard');});
    Route::get('/informationAboutUser', 'ApplicationController@getInformation');
//    Profile routs
    Route::post('/updateInformationUser', 'ApplicationController@updateInformation');
    Route::post('/userImageUploadAvatar','ApplicationController@imageUploadPost');
    Route::post('/deleteUserAvatar','ApplicationController@deleteUserAvatar');

//    Psychologist register supervision
    Route::post('/psychologistRegSupervision', 'ApplicationController@registrationSupervisor');
//   Find supervision 
    Route::post('/findSupervisor', 'ApplicationController@searchSupervisor');



});