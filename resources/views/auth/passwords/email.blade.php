@extends('landingPages.landing')


        <!-- Main Content -->
@section('content')
    <div class="container-fluid header-info">
        <div class="row  main-logo">
            <a href="{{ url('/') }}"> <img src="/image/header-logo-specialist.png"></a>
        </div>
        <div class="row log-ind-row">
            <div class="col-xs-2 col-xs-offset-10">
                <a href="{{ url('/login') }}"> <span class="log-ind-text">LOG IND</span></a>
            </div>
        </div>
    </div>

    <div class="container-fluid login-enter">
        <div class="row text-center">

            <form role="form" method="POST" action="{{ url('/password/email') }}">
                {{ csrf_field() }}

                <div class="login-fields">
                    <div class="row">
                        <div class="col-md-4 col-md-offset-4">
                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="row">

                        @if ($errors->has('email'))
                            <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                        </span>
                        @endif
                        <input type="email" name="email" value="{{ old('email') }}" required class="landing-input"
                               placeholder="Email">
                    </div>

                    <div class="row btn-login-row">
                        <button class="button light-green" type="submit">Nulstil adgangskode</button>
                    </div>
                    <div class="row href-login-row">
                        <span class="reset-page-text">Instruktion for nulstilling af adgangskode vil blive sendt til indtastede e-mail</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="section-footer-login">

    </div>

@endsection
