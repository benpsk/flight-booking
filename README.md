<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>


**Development Setup Guide**

**1. copy dev env file (no need to update anything)**
```shell
cp .env.example .env
```
**2. build & run docker container**
```shell
docker compose up --build
```
**3. enter to container**
```shell
docker compose exec app bash
```
**4. setup project (first time only)**
```shell
php artisan key:generate
```
**5. run migration & seeder (first time only)**
```shell
php artisan migrate --seed
```
**6. run tests**
```shell
npm run test
```
**7. access the app**
- http://localhost:8001

