<template>
    <div>
        <article class="content-block-profil content-block container-fluid">
            <div class="row">
                <h3>STATUS FOR SUPERVISION</h3>
                <hr>
            </div>
            <div class="row">
                <div class="col-md-2 col-md-offset-5 block-value">
                    <p class="text-center"><strong>REGISTRERET</strong></p>
                </div>
                <div class="col-md-2 block-value">
                    <p class="text-center"><strong>OMREGNET</strong></p>
                </div>
                <div class="col-md-2 block-value">
                    <p class="text-center"><strong>KRAV</strong></p>
                </div>
            </div>
            <div class="row value-wrapper">
                <div class="col-md-5 block-value">
                    <p class="headline main-head"><strong>Antal supervisionstimer</strong></p>
                </div>
                <div class="col-md-2 block-value">
                    <p class="headline text-center"><strong>13,5</strong></p>
                </div>
                <div class="col-md-2 block-value">
                    <p class="headline text-center"><strong>10</strong></p>
                </div>
                <div class="col-md-2 block-value">
                    <p class="headline text-center"><strong>160</strong></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-11">
                    <div class="progress out-space">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                             aria-valuemin="0" aria-valuemax="100" style="width:6%">
                            <strong>6%</strong>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 text-center">
                    <a href="javascript:;">
                        <img class="knap-pic" src="/image/info-knap.png" alt="info-knap">
                    </a>
                </div>
            </div>

            <section class="status">
                <div class="row">
                    <div class="col-md-5 block-value">
                        <p class="value-text main-head">Supervisionstimer gruppe</p>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="value-text text-center"><strong>REGISTRERET</strong></p>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="value-text text-center"><strong>GODKENDT</strong></p>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="value-text text-center"><strong>KRAV</strong></p>
                    </div>
                </div>
                <div class="row value-wrapper">
                    <div class="col-md-5">
                        <div class="progress out-space">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                                 aria-valuemin="0" aria-valuemax="100" style="width:38%">
                                <strong>38%</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="text-center headline">23</p>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="text-center headline">15,33</p>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="text-center headline">40</p>
                    </div>
                    <div class="col-md-1 text-center">
                        <a href="#">
                            <img class="knap-pic" src="/image/info-knap.png" alt="info-knap">
                        </a>
                    </div>
                </div>
                <div class="row headline-row">
                    <div class="col-md-12 block-value">
                        <p class="value-text main-head">Supervisionstimer individuel</p>
                    </div>
                </div>
                <div class="row value-wrapper">
                    <div class="col-md-5">
                        <div class="progress out-space">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                                 aria-valuemin="0" aria-valuemax="100" style="width:38%">
                                <strong>38%</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="text-center headline">23</p>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="text-center headline">15,33</p>
                    </div>
                    <div class="col-md-2 block-value">
                        <p class="text-center headline">40</p>
                    </div>
                    <div class="col-md-1 text-center">
                        <a href="#">
                            <img class="knap-pic" src="/image/info-knap.png" alt="info-knap">
                        </a>
                    </div>
                </div>
            </section>
            </article>

        <!--<article class="content-block">-->
        <!--<h3>REMINDER</h3>-->
        <!--<div class="col-md-6 text-block">X bliver forældet om 6 måneder</div>-->
        <!--<div class="col-md-6 buttons-container">-->
        <!--<a href="#" class="btn btn-primary-outline ">-->
        <!--tjek-->
        <!--</a>-->
        <!--</div>-->
        <!--</article>-->


    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component ready.')
        }
    }
</script>
