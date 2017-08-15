<div class="container-fluid header-info">
    <div class="row  main-logo">
        <a href="{{ url('/') }}">    <img src="/image/header-logo-specialist.png"></a>
    </div>
    <div class="row log-ind-row">
        <div class="col-xs-2 col-xs-offset-10">
            @if (Auth::check())
                <a href="{{ url('/logout') }}">  <span class="log-ind-text">LOG UD</span></a>
            @else
            <a href="{{ url('/login') }}">  <span class="log-ind-text">LOG IND</span></a>
            @endif
        </div>
    </div>
</div>