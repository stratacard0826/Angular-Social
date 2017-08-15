<?php
//Main page
Route::get('/', function () {
    return view('landingPages.pages.main');
});
// Auth routes
Route::get('/login', 'Auth\LoginController@showLoginForm');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LoginController@logout');
//Reset password routes
Route::get('/password/email', 'Auth\ForgotPasswordController@showLinkRequestForm');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset');
//Registration routes
Route::get('/register/{role}', 'Auth\RegisterController@showRegistrationForm');
Route::post('/register', 'Auth\RegisterController@register');
Route::get('/register/verify/{token}', 'Auth\RegisterController@verify');


