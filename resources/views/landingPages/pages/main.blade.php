@extends('landingPages.landing')


@section('content')
{{--Include header information--}}
@include('global.partials.header')


        <!--START CONTENT SECTION-->
<div class="container-fluid main-block-landing-center">
    @if (session('confirmingAccount'))
        <div class="col-md-4 col-md-offset-4">
            <div class="alert alert-success text-center">
                {{ session('confirmingAccount') }}
            </div>
        </div>
    @endif
    @if (session('letterRecover'))
        <div class="col-md-4 col-md-offset-4">
            <div class="alert alert-success text-center">
                {{ session('letterRecover') }}
            </div>
        </div>
    @endif
    @if (session('successfullyResetPassword'))
        <div class="col-md-4 col-md-offset-4">
            <div class="alert alert-success text-center">
                {{ session('successfullyResetPassword') }}
            </div>
        </div>
    @endif
    <div class="row">
        <h3 class="text-center main-landing-text">Psykolog og igang med din efteruddannelse?</h3>
    </div>

    <div class="row">
        <h3 class="text-center main-landing-text-cent">Specialistuddannelse.dk gør det let for dig at få overblik over
            din efteruddannelse.<br>
            Registrer din supervision og hold styr på dine kurser.
        </h3>
    </div>
    <div class="row text-center">
        <a href="{{url('/register','psychologist')}}" class="href-button light-green">Kom igang</a>
    </div>
    <div class="row">
        <h3 class="text-center main-landing-text-foot">
            Så kan bruge tiden på det, du brænder for
        </h3>
    </div>

</div>
<!--END CONTENT SECTION-->

<!--START FOOTER SECTION-->
<div class="container-fluid main-block-landing-footer">
    <div class="row">
        <h3 class="text-center footer-text-header">Er du kursudbyder eller supervisor?</h3>
    </div>
    <div class="row text-center footer-btn">
        <a href="{{url('/register','courseOrganizer')}}" class="href-button dark-green">Kursusudbyder</a>
        <a href="{{url('/register','supervisor')}}" class="href-button dark-red">Supervisor</a>
    </div>
    <div class="row text-center">
        <p class="text-center footer-text-centr">Opret din profil her</p>
    </div>
    <p class="text-center footer-text-footer">Er du kursusudbyder eller supervisor og vil rigtig gerne i kontakt med en
        masse håbefulde psykologer, der søger godt indhold til deres specialistuddannelse, så opret din profil her idag
        og bliv kontaktet af din næste supervisand eller kursusdeltager.</p>
    <!--END FOOTER SECTION-->


</div>

<div class="row end-footer">

</div>


@endsection

