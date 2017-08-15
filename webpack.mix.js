let mix = require('laravel-mix').mix;


mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
mix.combine(['resources/assets/css/sweetalert2.min.css',
    'resources/assets/css/croppie.css',
    'resources/assets/css/jquery-ui-1.8.20.custom.css'
], 'public/css/all.css');
