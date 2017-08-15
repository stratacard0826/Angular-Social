@extends('landingPages.landing')
@section('content')
    <div class="container-fluid header-info">
        <div class="row  main-logo">
            <a href="{{ url('/') }}">    <img src="/image/header-logo-specialist.png"></a>
        </div>
        <div class="row log-ind-row">
            <div class="col-xs-2 col-xs-offset-10">
                <a href="{{ url('/login') }}">  <span class="log-ind-text">LOG IND</span></a>
            </div>
        </div>
    </div>
    <div class="container-fluid login-enter">
        <div class="row text-center">
            <form role="form" method="POST" action="{{ url('/password/reset') }}">
                {{ csrf_field() }}
                <input type="hidden" name="token" value="{{ $token }}">
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
                        <input type="email" name="email" value="{{ $email or old('email') }}" class="landing-input" placeholder="Email"  required autofocus>
                    </div>
                    <div class="row">
                        @if ($errors->has('password'))
                            <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                        </span>
                        @endif
                        <input id="password" type="password"  class="landing-input" name="password" required placeholder="Adgangskode">
                    </div>
                    <div class="row">
                        @if ($errors->has('password_confirmation'))
                            <span class="help-block">
                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                        </span>
                        @endif
                        <input id="password" type="password" class="landing-input" name="password_confirmation" placeholder="Kodeords bekræftelse" required>
                    </div>

                    <div class="row btn-login-row">
                        <button class="button light-green" type="submit">Nulstil adgangskode</button>
                    </div>
                    {{--<div class="row href-login-row">--}}
                        {{--<span class="reset-page-text">Instruktion for nulstilling af adgangskode vil blive sendt til indtastede e-mail</span>--}}
                    {{--</div>--}}
                </div>
            </form>
        </div>
    </div>
    <div class="section-footer-login">

    </div>
@endsection
