<?php

use Illuminate\Database\Seeder;

use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	User::create([
    		'active' => true,
    		'firstname' => 'John',
    		'lastname' => 'Doe',
    		'email'	=> 'admin@local.fr',
    		'password' => bcrypt('123'),
    		'role' => 'ADMIN_USER'
    	]); 
    }
}
