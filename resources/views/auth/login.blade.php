@extends('landingPages.landing')


@section('content')

    <div class="container-fluid header-info">
        <div class="row  main-logo">
            <a href="{{ url('/') }}"> <img src="/image/header-logo-specialist.png"></a>
        </div>
    </div>

    <div class="container-fluid login-enter">
        <div class="row text-center">
            <form role="form" method="POST" action="{{ url('/login') }}">
                {{ csrf_field() }}
                <div class="login-fields">
                    @if (session('successfullyActivated'))
                        <div class="row">
                            <div class="col-md-2 col-md-offset-5">
                                <div class="alert alert-success">
                                    {{ session('successfullyActivated') }}
                                </div>
                            </div>
                        </div>
                    @endif
                    <div class="row">
                        @if ($errors->has('email'))
                            <span class="help-block">
                                <strong>{{ $errors->first('email') }}</strong>
                                </span>
                        @endif
                        <input type="email" name="email" class="landing-input" value="{{ old('email') }}"
                               placeholder="Email" autofocus>
                    </div>
                    <div class="row">
                        @if ($errors->has('password'))
                            <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                                </span>
                        @endif
                        <input type="password" name="password" value="{{ old('password')}}" class="landing-input"
                               placeholder="Adgangskode">
                    </div>
                    <div class="row btn-login-row">
                        <button type="submit" class="button light-green">Log ind</button>
                    </div>
                    <div class="row href-login-row">
                        <a href="{{url("/password/email")}}"><span
                                    class="href-login-text">Har du glemt din adgangskode?</span></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="section-footer-login">

    </div>

    {{--<div class="container">--}}
    {{--<div class="row">--}}
    {{--<div class="col-md-8 col-md-offset-2">--}}
    {{--<div class="panel panel-default">--}}
    {{--<div class="panel-heading">Login</div>--}}
    {{--<div class="panel-body">--}}
    {{--<form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">--}}
    {{--{{ csrf_field() }}--}}

    {{--<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">--}}
    {{--<label for="email" class="col-md-4 control-label">E-Mail Address</label>--}}

    {{--<div class="col-md-6">--}}
    {{--<input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>--}}

    {{--@if ($errors->has('email'))--}}
    {{--<span class="help-block">--}}
    {{--<strong>{{ $errors->first('email') }}</strong>--}}
    {{--</span>--}}
    {{--@endif--}}
    {{--</div>--}}
    {{--</div>--}}

    {{--<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">--}}
    {{--<label for="password" class="col-md-4 control-label">Password</label>--}}

    {{--<div class="col-md-6">--}}
    {{--<input id="password" type="password" class="form-control" name="password" required>--}}

    {{--@if ($errors->has('password'))--}}
    {{--<span class="help-block">--}}
    {{--<strong>{{ $errors->first('password') }}</strong>--}}
    {{--</span>--}}
    {{--@endif--}}
    {{--</div>--}}
    {{--</div>--}}

    {{--<div class="form-group">--}}
    {{--<div class="col-md-6 col-md-offset-4">--}}
    {{--<div class="checkbox">--}}
    {{--<label>--}}
    {{--<input type="checkbox" name="remember" {{ old('remember') ? 'checked' : ''}}> Remember Me--}}
    {{--</label>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}

    {{--<div class="form-group">--}}
    {{--<div class="col-md-8 col-md-offset-4">--}}
    {{--<button type="submit" class="btn btn-primary">--}}
    {{--Login--}}
    {{--</button>--}}

    {{--<a class="btn btn-link" href="{{ url('/password/reset') }}">--}}
    {{--Forgot Your Password?--}}
    {{--</a>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</form>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
@endsection
