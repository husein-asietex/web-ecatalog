<?php

namespace Database\Factories;

use App\Models\Product_categories;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product_categories>
 */
class Product_categoriesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(2, true),
            'slug' => $this->faker->unique()->slug(),
            'description' => $this->faker->sentence(),
            'is_active' => $this->faker->boolean(90),
        ];
    }
}
