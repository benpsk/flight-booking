ARG VERSION

FROM php:${VERSION}-fpm

ARG VERSION

WORKDIR /var/www/html

# Install system dependencies # Install PHP extensions
RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev \
    libfreetype-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pgsql pdo_pgsql pdo


# Install Node.js lts version and NPM, supervisor and cron
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
    apt-get install -y nodejs

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY ./docker/start-container.sh /usr/local/bin/start-container.sh

RUN chmod +x /usr/local/bin/start-container.sh

ENTRYPOINT [ "start-container.sh" ]
