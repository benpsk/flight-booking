<?php

namespace App\Enums;

enum Gender: string
{
    case male = 'Male';
    case female = 'Female';

    public static function all(): array
    {
        return array_column(self::cases(), 'value');
    }
}

