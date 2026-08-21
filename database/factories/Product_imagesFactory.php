<?php

namespace Database\Factories;

use App\Models\Product_images;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product_images>
 */
class Product_imagesFactory extends Factory
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
            'image_path' => 'products/' . $this->faker->fileExtension() . '.jpg',
        ];
    }
}
