<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=description content="Specialistuddannelse"/>
    <meta name="keywords" content="Specialistuddannelse"/>
    <meta name="author" content="Sasha Tarasyuk"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Specialistuddannelse</title>
    {{--INCLUDE GLOBAL CSS--}}
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css"/>
    <link href="{{asset('css/all.css')}}" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    @stack('app-styles')
</head>
<body class="application">
<section class="message" id="support-message">
    <div class="overlay"></div>
    <div class="overlayMenu"></div>
    <a href="javascript:;" class="message-button open-popup" id="support-btn">
        <img src="/image/message.png" alt="message">
    </a>
    <div class="arrow-section text-center">
        <img src="/image/feedback-tag-skriv.png" alt="arrow">
    </div>
    <div class="message-content" id="message-content">
        <h3>SKRIV DIN KOMMENTAR</h3>
        <p>hej {{Auth::user()->getFullName()}}</p>
        <p>Hijaelp os med at gore siden bedre.</p>
        <p>Vi vil rigtigt gerne have alle dine gode kommentarer, sa vi kan gore siden till sa god en service som muligt
            for dig.</p>
        <p>Alle forslag og kommentarer vil blive laest og hort,sa vi kan implementere dine forslag og gore siden sa god
            som mulig.</p>
        <form action="">
            <textarea name="message" id="message" placeholder="skriv..."></textarea>
            <button type="submit" class="button light-green ">send</button>
        </form>
    </div>
</section>
<div id="app">
    @include("global.partials.headerApplication")
    <div class="container-fluid content-box">
        <aside class="sidebar">
            @include('global.partials.sidebar')
        </aside>
        <section class="content">
            <router-view></router-view>
        </section>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</div>
</body>
</html>
