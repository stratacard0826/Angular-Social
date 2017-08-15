@extends('layouts.app')


@section('content')
    <article class="content-block">
        <h3>SUPERVISION</h3>
        <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                 aria-valuemin="0" aria-valuemax="100" style="width:40%">
                40%
            </div>
        </div>
        <section class="buttons-container">
            <a href="#" class="btn btn-primary-outline ">
                oversigt
            </a>
            <a href="#" class="btn btn-primary-outline ">
                register
            </a>
        </section>
    </article>

    <article class="content-block">
        <h3>TEORIKURSER</h3>
        <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                 aria-valuemin="0" aria-valuemax="100" style="width:30%">
                30%
            </div>
        </div>
        <section class="buttons-container">
            <a href="#" class="btn btn-primary-outline ">
                oversigt
            </a>
            <a href="#" class="btn btn-primary-outline ">
                register
            </a>
        </section>
    </article>


    {{--<article class="content-block">--}}
    {{--<h3>REMINDER</h3>--}}
    {{--<div class="col-md-6 text-block">X bliver forældet om 6 måneder</div>--}}
    {{--<div class="col-md-6 buttons-container">--}}
    {{--<a href="#" class="btn btn-primary-outline ">--}}
    {{--tjek--}}
    {{--</a>--}}
    {{--</div>--}}
    {{--</article>--}}




    <article class="content-block">
        <div class="col-md-6 text-block-header">
            <h3>SUPERVISOR KONTAKT</h3>
            <p>Dine seneste supervisorforhold</p>
        </div>
        <div class="col-md-6 buttons-container-header">
            <a href="#" class="btn btn-primary-outline ">
                se komplet liste
            </a>
        </div>
        <div class="scroll-box">
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Jens Jensen</li>
                        <li>Odense</li>
                        <li>Specialist i Psykoterapi</li>
                        <li>Supervisoruddannet</li>
                        <li>54 År</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            register
                        </a>
                    </div>
                </div>

            </div>
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Jens Jensen</li>
                        <li>Odense</li>
                        <li>Specialist i Psykoterapi</li>
                        <li>Supervisoruddannet</li>
                        <li>54 År</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            register
                        </a>
                    </div>
                </div>
            </div>
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Jens Jensen</li>
                        <li>Odense</li>
                        <li>Specialist i Psykoterapi</li>
                        <li>Supervisoruddannet</li>
                        <li>54 År</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            register
                        </a>
                    </div>
                </div>
            </div>
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Jens Jensen</li>
                        <li>Odense</li>
                        <li>Specialist i Psykoterapi</li>
                        <li>Supervisoruddannet</li>
                        <li>54 År</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            se profil
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>



    <article class="content-block">
        <div class="col-md-6 text-block-header">
            <h3>KURSUS KONTAKT</h3>
            <p>Seneste 4 kurser som du har deltaget i</p>
        </div>
        <div class="col-md-6 buttons-container-header">
            <a href="#" class="btn btn-primary-outline ">
                se komplet liste
            </a>
        </div>
        <div class="scroll-box">
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Kursusnavn</li>
                        <li>Kursusnummer:76345</li>
                        <li>Dato 26/ 5 2017</li>
                        <li>specialistuddannelse i</li>
                        <li>neuropsykologi</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            se profil
                        </a>
                    </div>
                </div>
            </div>
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Kursusnavn</li>
                        <li>Kursusnummer:76345</li>
                        <li>Dato 26/ 5 2017</li>
                        <li>specialistuddannelse i</li>
                        <li>neuropsykologi</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            se profil
                        </a>
                    </div>
                </div>
            </div>
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Kursusnavn</li>
                        <li>Kursusnummer:76345</li>
                        <li>Dato 26/ 5 2017</li>
                        <li>specialistuddannelse i</li>
                        <li>neuropsykologi</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            se profil
                        </a>
                    </div>
                </div>
            </div>
            <div class="item-box">
                <div class="avatar-section">
                    <img src="/image/avatar-placeholder.png" alt="avatar">
                </div>
                <div class="text-section">
                    <ul>
                        <li class="bold">Kursusnavn</li>
                        <li>Kursusnummer:76345</li>
                        <li>Dato 26/ 5 2017</li>
                        <li>specialistuddannelse i</li>
                        <li>neuropsykologi</li>
                    </ul>
                    <div class="button-section">
                        <a href="#" class="btn btn-primary-outline ">
                            se profil
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>



@endsection