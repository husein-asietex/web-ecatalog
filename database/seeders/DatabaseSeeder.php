<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\Product_categories;
use App\Models\Product_files;
use App\Models\Product_images;
use App\Models\Products;
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
        Role::firstOrCreate(['id' => 2], ['name' => 'admin']);
        Role::firstOrCreate(['id' => 3], ['name' => 'staff']);

        $role = Role::find(1);
        
        User::factory()->create([
            'name' => 'superadmin',
            'email' => 'superadmin@example.com',
            'password' => bcrypt('password'),
            'role_id' => $role->id
        ]);
        
        User::factory(10)->create(['role_id' => 3]);
        Product_categories::factory(10)->create();
        Products::factory(20)->create();
        Product_images::factory(20)->create();
        Product_files::factory(20)->create();
    }
}
