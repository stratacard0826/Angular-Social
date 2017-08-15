<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=description content="Specialistuddannelse" />
    <meta name="keywords" content="Specialistuddannelse" />
    <meta name="author" content="Sasha Tarasyuk" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Specialistuddannelse</title>

    {{--INCLUDE GLOBAL CSS--}}
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

    @stack('landing-styles')

</head>
<body class="landing">


@yield('content')



</body>
</html>
