<?php
Auth::routes();

Route::get('/home', function () {
    return view('application.dashboard');
});
