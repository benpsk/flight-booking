<?php

namespace App\Enums;

enum BookingStatus: string
{
    case pending = 'Pending';
    case decline = 'Decline';
    case paid = 'Paid';
    case cancel = 'Cancel';

    public static function all(): array
    {
        return array_column(self::cases(), 'value');
    }
}

