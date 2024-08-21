<?php

if (!function_exists('encryption')) {

    function encryption($data)
    {
        return openssl_encrypt($data, 'aes-256-cbc', config('secret.key'), 0, config('secret.iv'));
    }
}
if (!function_exists('decryption')) {

    function decryption($data)
    {
        return openssl_decrypt($data, 'aes-256-cbc', config('secret.key'), 0, config('secret.iv'));
    }
}
