#!/usr/bin/env bash

APPENV=${APPENV:-production}

echo "App running on $APPENV environment."

if [ $APPENV == "production" ]; then
    echo "Running production tasks."
    php /usr/bin/composer install --optimize-autoloader --no-dev

    echo "Running assets."
    npm install
    npm run build
    php artisan inertia:start-ssr &
else
    echo "Running tasks."
    php /usr/bin/composer install

    echo "Running assets."
    npm install
    npm run dev --host=0.0.0.0 &
fi

chown -R www-data:www-data storage
chown -R www-data:www-data bootstrap/cache

# run php-fpm
/usr/local/sbin/php-fpm -F

# start Supervisor
supervisord -c /etc/supervisor/supervisord.conf

# Start cron in the foreground
cron &
