@extends('layouts.app')


@section('content')
    <article class="content-block-profil">
        <h3>PROFIL ADMINISTRATION</h3>
        <hr>
        <div class="col-md-6">
            <form action="">
                <div class="row">
                    <input type="text" class="application-input" placeholder="Navn">
                </div>
                <div class="row">
                    <input type="text" class="application-input" placeholder="Email">
                </div>
                <div class="row">
                    <input type="text" class="application-input" placeholder="Adgangskode">
                </div>
                <div class="row select-dropdown">
                    <select class="application-select" id="application-select">
                        <option selected="selected" class="default-option" value="default">Vælg specialistuddannelse
                        </option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="row wrap-input-address">
                    <div class="test">
                        <input type="text" class="addresse-input" placeholder="Adresse">
                        <input type="text" class="postnr-input" placeholder="Postnr.">
                        <input type="text" class="by-input" placeholder="By">
                    </div>
                </div>
                <div class="row">
                    <input type="text" class="application-input" placeholder="Tlf.nr.">

                </div>
                <div class="row">
                    <button type="submit" class="button light-green profil-button ">Gem</button>
                </div>
            </form>
        </div>
        <div class="col-md-6">
            <div class="avatar-box">
                <div class="text-box">
                    <div>
                        <span class="text-avatar">Billede</span>
                    </div>
                    <div>
                        <img src="/image/avatar-placeholder.png" alt="avatar">
                    </div>
                    <div class="flex-empty">some text</div>
                </div>
                <div class="action">
                    <div class="col-md-6 upload">
                        <form action="" class="fileUploadForm">
                            <input type="file" id="fileFieldUpload">
                        </form>
                        <span id="fileUpload">
                        <img src="/image/vector-smart-arrow-up.png" alt="arrow">
                            Upload
                        </span>

                    </div>
                    <div class="col-md-6 text-right">
                        <span id="fileDelete">
                        <img src="/image/vector-smart-trash.png" alt="trash">
                            Fjern
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </article>
@endsection