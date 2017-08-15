@extends('landingPages.landing')


@section('content')

    <div class="container-fluid header-info">
        <div class="row  main-logo">
            <a href="{{ url('/') }}">    <img src="/image/header-logo-specialist.png"></a>
        </div>
    </div>


    <div class="container-fluid login-enter">
        <div class="row text-center">
            <form role="form" method="POST" action="{{ url('/register') }}">
                {{ csrf_field() }}
                <div class="login-fields">
                    <div class="row user-role-row">
                        {{--SECTION CHECKS USER ROLE--}}
                        @if($userRole == "courseOrganizer")
                            <div class="user-role-dark-green">
                                <span class="user-role-text">Kursusudbyder</span>
                            </div>
                        @elseif($userRole == "supervisor")
                            <div class="user-role-dark-red">
                                <span class="user-role-text">Supervisor</span>
                            </div>
                        @endif
                        {{-- END SECTION CHECKS USER ROLE--}}

                        @if ($errors->has('name'))
                            <span class="help-block">
                                <strong>{{ $errors->first('name') }}</strong>
                                </span>
                        @endif
                        <input type="text" name="name" class="landing-input" placeholder="Fornavn"
                               value="{{ old('name') }}" autofocus>

                        <input type="hidden" name="role" value="{{$userRole}}">
                    </div>
                    <div class="row">
                        @if ($errors->has('surname'))
                            <span class="help-block">
                                <strong>{{ $errors->first('surname') }}</strong>
                                </span>
                        @endif
                        <input type="text" class="landing-input" name="surname" value="{{ old('surname') }}"
                               placeholder="Efternavn">
                    </div>
                    <div class="row">
                        @if ($errors->has('email'))
                            <span class="help-block">
                                <strong>{{ $errors->first('email') }}</strong>
                                </span>
                        @endif
                        <input type="text" class="landing-input" name="email" value="{{ old('email') }}"
                               placeholder="Email">
                    </div>
                    <div class="row">
                        @if ($errors->has('password'))
                            <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                                </span>
                        @endif
                        <input type="password" class="landing-input" name="password" value="{{ old('password') }}"
                               placeholder="Adgandskode">
                    </div>
                    <div class="row btn-login-row">
                        <button type="submit" class="button light-green">Opret ny bruger</button>
                    </div>
                    <div class="row href-login-row">
                        <span class="reset-page-text">Mailbekræftigelse med oprettet<br>
                                                        adgangskode vil blive sendt til din e-mail</span>
                    </div>
                </div>


            </form>
        </div>
    </div>
    <div class="section-footer-login">

    </div>

@endsection
