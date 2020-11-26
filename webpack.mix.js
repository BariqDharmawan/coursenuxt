let mix = require('laravel-mix');

mix.sass('static/sass/app.scss', 'static/css/app.module.css')
    .setPublicPath('static');