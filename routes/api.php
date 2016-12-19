<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/quotes', [
    'uses' => 'QuoteController@getQuotes'
]);

Route::post('/quote', [
    'uses' => 'QuoteController@postQuote'
]);

Route::put('/quote/{id}', [
    'uses' => 'QuoteController@putQuote'
]);

Route::delete('/quote/{id}', [
    'uses' => 'QuoteController@deleteQuote'
]);
