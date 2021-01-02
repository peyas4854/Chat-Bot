<?php

use Illuminate\Support\Facades\Route;


Auth::routes();
Route::get('/', 'ChatController@chat');
Route::post('/send', 'ChatController@send');

Route::get('/home', 'HomeController@index')->name('home');
