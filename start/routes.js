"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.post('/admin/authenticate', 'AdminController.authenticate');
Route.post('/admin/register', 'AdminController.register');

//Route.post('/location', 'LocationController.store').middleware(["auth"]);
Route.post('/location', 'UserLocationController.store').middleware(['auth']);



Route.get("/app", "AppController.index").middleware(["auth"]);
