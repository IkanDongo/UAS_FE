<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'category',
        'brand',
        'price',
        'stock',
        'image_url',
    ];

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }
}
