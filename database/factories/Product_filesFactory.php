<?php

namespace Database\Factories;

use App\Models\Product_files;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product_files>
 */
class Product_filesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => \App\Models\Products::inRandomOrder()->first()?->id ?? \App\Models\Products::factory(),
            'file_path' => 'files/' . $this->faker->word() . '.pdf',
            'file_name' => $this->faker->word() . '.pdf',
            'file_type' => 'application/pdf',
        ];
    }
}
