<template>
    <article class="content-block-profil">
        <h3>FIND SUPERVISOR</h3>
        <hr>
        <div class="col-md-6 find-supervisor-container">
            <form action="" @submit.prevent="SaveProfile" @keydown="deleteErrors($event.target.name)">

                <div class="row text-center">
                    <select class="application-select" id="lookingSupervisor" v-model="lookingSupervisor"
                            @change="changeDropDownLookingSupervisor">
                        <option class="default-option" v-for="option in lookingSupervisorOptions"
                                v-bind:value="option.value" :disabled="option.value==0">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="row text-center">
                    <select class="application-select" id="specialistDegree" v-model="specialistDegree"
                            @change="changeDropDownSpecialistDegree">
                        <option class="default-option" v-for="option in specialistDegreeOptions"
                                v-bind:value="option.value" :disabled="option.value==0">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="row text-center">
                    <select class="application-select" id="theoreticalPreference" v-model="theoreticalPreference"
                            @change="changeDropDownTheoreticalPreference">
                        <option class="default-option" v-for="option in theoreticalPreferenceOptions"
                                v-bind:value="option.value" :disabled="option.value==0">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="row find-supervisor-btn">
                    <button type="submit" class="button light-green profil-button ">Søg</button>
                </div>
            </form>
        </div>
        <div class="col-md-6 find-supervisor-container">
            <div class="row">
                <input type="text" name="name" class="application-input" v-model="name" placeholder="Navn">
            </div>
            <div class="row">
                <div class="check-box">
                    <span class="check-description">
                        Supervisoruddannet
                    </span>
                    <div class="customCheckbox">
                        <input type="checkbox" id="checkbox-1-1" class="regular-checkbox"/>
                        <label for="checkbox-1-1"></label>
                    </div>
                </div>
            </div>
        </div>
    <div class="row col-md-12">
        <article class="content-block-result">
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
                            <li> Kognitiv/ adfærdsterapeutisk</li>
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
                            <li class="bold">Jens Jensen</li>
                            <li>Odense</li>
                            <li>Specialist i Psykoterapi</li>
                            <li>Supervisoruddannet</li>
                            <li> Kognitiv/ adfærdsterapeutisk</li>
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
                            <li class="bold">Jens Jensen</li>
                            <li>Odense</li>
                            <li>Specialist i Psykoterapi</li>
                            <li>Supervisoruddannet</li>
                            <li> Kognitiv/ adfærdsterapeutisk</li>
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
                            <li class="bold">Jens Jensen</li>
                            <li>Odense</li>
                            <li>Specialist i Psykoterapi</li>
                            <li>Supervisoruddannet</li>
                            <li> Kognitiv/ adfærdsterapeutisk</li>
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


    </div>

    </article>

</template>

<script>
    export default {
//        Collect information to vue.data
        data()
        {
            return {
                lookingSupervisor: 'default',
                lookingSupervisorOptions: [
                    {text: 'Hvor søger du supervisor?', value: 'default'},
                    {text: 'By: ', value: 0},
                    {text: '   * Århus', value: 'Århus'},
                    {text: '   * København', value: 'København'},
                    {text: '   * Odense', value: 'Odense'},
                    {text: '   * Ålborg', value: 'Ålborg'},
                    {text: 'Region: ', value: 0},
                    {text: '   * Nordjylland', value: 'Nordjylland'},
                    {text: '   * Midtjylland', value: 'Midtjylland'},
                    {text: '   * Sønderjylland', value: 'Sønderjylland'},
                    {text: '   * Fyn', value: 'Fyn'},
                    {text: '   * Sjælland', value: 'Sjælland'},
                ],
                specialistDegree: 'default',
                specialistDegreeOptions: [
                    {text: 'Specialistgrad', value: 'default'},
                    {text: 'Børnepsykologi: ', value: 0},
                    {text: '   * Sundhedspsykologi med børn', value: 'Sundhedspsykologi med børn'},
                    {text: '   * Psykoterapi med børn', value: 'Psykoterapi med børn'},
                    {text: '   * Klinisk børnepsykologi', value: 'Klinisk børnepsykologi'},
                    {text: '   * Klinisk børneneuropsykologi', value: 'Klinisk børneneuropsykologi'},
                    {text: '   * Pædagogisk psykologi', value: 'Pædagogisk psykologi'},
                    {text: 'Voksenpsykologi: ', value: 0},
                    {text: '   * Sundhedspsykologi med voksne', value: 'Sundhedspsykologi med voksne'},
                    {text: '   * Psykoterapi med voksne', value: 'Psykoterapi med voksne'},
                    {text: '   * Psykopatologi', value: 'Psykopatologi'},
                    {text: '   * Psykotraumatologi', value: 'Psykotraumatologi'},
                    {text: '   * Klinisk Neuropsykologi', value: 'Klinisk Neuropsykologi'},
                    {text: '   * Gerontopsykolog', value: 'Gerontopsykolog'},
                    {text: 'Arbejds- og organisationspsykologi: ', value: 0},
                    {text: '   * Arbejds- og organisationspsykologi', value: 'Arbejds- og organisationspsykologi'},
                ],
                theoreticalPreference: 'default',
                theoreticalPreferenceOptions: [
                    {text: 'Teoretisk Præference', value: 'default'},
                    {text: '   * Eksistentiel/humanistisk', value: 'Eksistentiel/humanistisk'},
                    {text: '   * Kognitiv/ adfærdsterapeutisk', value: 'Kognitiv/ adfærdsterapeutisk'},
                    {text: '   * Psykodynamisk/psykoanalytisk', value: 'Psykodynamisk/psykoanalytisk'},
                    {text: '   * Systemisk/strukturel', value: 'Systemisk/strukturel'},
                ],
                errors: [],
            }
        }
        ,
        //        when component created get info about user
        created: function () {


        }
        ,
        methods: {

//            delete field error
            deleteErrors(field)
            {
                if (this.errors[field]) {
                    delete this.errors[field];
                }
            }
            ,
//              check user error
            hasError(field)
            {
                return this.errors[field] !== undefined;
            }
            ,
            //            change color field when user change option
            changeColorSelect(select, selectedValue){
                if (selectedValue == 'default') {
                    select.css({
                        "background-color": "#d0edf8",
                        "font-family": "Raleway"
                    });
                } else {
                    select.css({
                        "background-color": "#f6faca",
                        "font-family": "Raleway regular"
                    });
                }
            },
            changeDropDownLookingSupervisor()
            {
                this.changeColorSelect($('#lookingSupervisor'), $('#lookingSupervisor').val());
            },
            changeDropDownSpecialistDegree()
            {
                this.changeColorSelect($('#specialistDegree'), $('#specialistDegree').val());
            }
            ,
            changeDropDownTheoreticalPreference()
            {
                this.changeColorSelect($('#theoreticalPreference'), $('#theoreticalPreference').val());
            }
            ,

            getError(field)
            {
                if (this.errors[field]) {
                    return this.errors[field][0];
                }
            }
            ,

        }
    }


</script>
