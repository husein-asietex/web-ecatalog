<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::firstOrCreate([
            'name' => 'superadmin',
        ]);

        $role = Role::find(1);
        
        User::factory()->create([
            'name' => 'superadmin',
            'email' => 'superadmin@example.com',
            'password' => bcrypt('password'),
            'role_id' => $role->id
        ]);
        
        // User::factory(10)->create();
    }
}
