<template>
    <article class="content-block-profil">
        <h3>REGISTRER SUPERVISION</h3>
        <hr>
        <!--START SECTON POP UP-->
        <div class="row popUp-Opret">
            <div class="popUpContainer">
                <div class="row">
                    <div class="col-md-6">
                        <span>Søg supervisor i vores database</span>
                        <input type="text" name="name" class="application-input" id="findSupervisorInRegister"
                               list="supervisor_list" v-model="findSupervisorInput" placeholder="Navn"
                               @keyup="findSupervisor">
                        <datalist id="supervisor_list">
                            <option></option>
                        </datalist>
                        <div class="voresDatabase">
                            <span>Søg supervisor i vores database</span>
                            <a href="javascript:;" id="openCreateSupervisor" @click="showSupervisorCreate"
                               class="btn btn-primary-outline ">
                                Opret manuelt
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button class="button light-green profil-button">godkend</button>
                    </div>
                </div>
            </div>
            <div class="wrapper-section-popUp">
                <form action="" @submit.prevent="addNewSupervisor" @keydown="deleteErrors($event.target.name)">
                    <div class="addNewSupervison-container">
                        <div class="col-md-6">
                            <div class="custom-block">
                                <input type="text" class="addresse-input" v-model="address" placeholder="Adresse">
                                <input type="text" class="postnr-input" v-model="postIndex" placeholder="Postnr.">
                                <input type="text" class="by-input" v-model="city" placeholder="By">
                                <input type="text" class="application-input" v-model="phone" placeholder="Tlf.nr.">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="custom-block right-side">
                                <input type="text" class="addresse-input" v-model="name_reg" placeholder="Fornavn">
                                <input type="text" class="postnr-input efternav" v-model="surname_reg"
                                       placeholder="Efternavn">
                                <input type="email" class="application-input" v-model="email" placeholder="E-mail">

                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 pop-Up-draft">
                        <hr>
                    </div>

                    <div class="col-md-6 pop-Up-draft">
                        <div class="left-dropdown-inPopUp">
                            <select class="application-select" v-model="special_preparation"
                                    @change="changeDropDownSelectSupervisor">
                                <option class="default-option" v-for="option in options" v-bind:value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        <div class="button-section">
                            <button type="submit" class="button light-green profil-button ">Opret</button>
                        </div>
                    </div>
                    <div class="col-md-6 right-input-block pop-Up-draft">
                        <input type="text" name="name" class="application-input" v-model="special_evidence"
                               placeholder="journalnummer på specialistbevis...">


                        <div class="check-box">
                    <span class="check-description">
                        Supervisoruddannet
                    </span>
                            <div class="customCheckbox">
                                <input type="checkbox" id="checkbox-1-10" class="regular-checkbox"
                                       v-model="special_trained"/>
                                <label for="checkbox-1-10"></label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!--END SECTON POP UP-->
        <div class="row custom-input-register-supervisor">
            <div class="col-md-6 find-supervisor-container">
                <div class="row text-center">
                    <select class="application-select" id="selectSupervisor" v-model="selectSupervisor"
                            @change="changeDropDownSelectSupervisor">
                        <option class="default-option" v-for="option in selectSupervisorOptions"
                                v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="row text-center">
                    <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
                </div>

                </form>
            </div>
            <div class="col-md-6 find-supervisor-container">
                <div class="row btn-popup">
                    <a href="javascript:;" id="popUpOpretNySupervisor" @click="showPopUp"
                       class="btn btn-primary-outline ">
                        Opret ny supervisor
                    </a>
                </div>
                <div class="row supervisorType">
                    <select class="application-select" id="supervisionsType" v-model="supervisionsType"
                            @change="changeDropDownSupervisionsType">
                        <option class="default-option" v-for="option in supervisionsTypeOptions"
                                v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div>
            <!--<vue-slider v-model="value" ></vue-slider>-->
            <vue-slider ref="slider" v-bind="demo.default" v-model="demo.default.value"></vue-slider>
        </div>

        <div class="row">
            <div class="check-box-register-supervisor">
                <div class="col-md-6">
                    <div class="row">
                        <div class="check-box">
                            <div class="customCheckbox">
                                <input type="checkbox" id="checkbox-1-1" class="regular-checkbox"/>
                                <label for="checkbox-1-1"></label>
                            </div>
                             <span class="check-description">
                        Udredning
                    </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="check-box">
                    <span class="check-description">
                        Ekstern
                    </span>
                            <div class="customCheckbox">
                                <input type="checkbox" id="checkbox-1-2" class="regular-checkbox"/>
                                <label for="checkbox-1-2"></label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="check-box">
                    <span class="check-description">
                        Individuel
                    </span>
                            <div class="customCheckbox">
                                <input type="checkbox" id="checkbox-1-3" class="regular-checkbox"/>
                                <label for="checkbox-1-3"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div class="row">
                        <div class="check-box right-side-checkbox">
                    <span class="check-description">
                        Intervention
                    </span>
                            <div class="customCheckbox">
                                <input type="checkbox" id="checkbox-1-4" class="regular-checkbox"/>
                                <label for="checkbox-1-4"></label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="check-box right-side-checkbox">
                    <span class="check-description">
                        Intern
                    </span>
                            <div class="customCheckbox">
                                <input type="checkbox" id="checkbox-1-5" class="regular-checkbox"/>
                                <label for="checkbox-1-5"></label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="check-box right-side-checkbox">
                    <span class="check-description">
                        Gruppe
                    </span>
                            <div class="customCheckbox">
                                <input type="checkbox" id="checkbox-1-6" class="regular-checkbox"
                                       @change="hideDropDown"/>
                                <label for="checkbox-1-6"></label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="row hide-select-register-supervisor" v-show="hideSelectGroupComposition">
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <div class="row supervisorType">
                    <select class="application-select" id="groupComposition" v-model="groupComposition"
                            @change="changeDropDownGroupComposition">
                        <option class="default-option" v-for="option in groupCompositionOptions"
                                v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row register-supervisor-textarea">
            <textarea name="SkrivKommentar" id="" cols="30" rows="1" placeholder="Skriv kommentar.../
            Beskriv kort overfor hvilke arbejdsopgaver supervisionen blev givet:"></textarea>
        </div>
        <div class="row">
            <button type="submit" class="button light-green profil-button ">Gem</button>
        </div>


        <div class="row register-supervisor-bilag">
            <h5>Bilag</h5>
            <div class="bilag-container">
                <span class="container-img">
                <img src="/image/book.png" alt="book">
                    </span>
                <span>Beskrivelse af supervisionsforløb.pdf</span>
                <div class="actions">
                    <img class="download" src="/image/arrow-download.png" alt="download">
                    <img class="trash" src="/image/vector-smart-trash.png" alt="delete">
                </div>
            </div>
            <div class="bilag-container">
                <span class="container-img"></span>
                <span>Klinik.jpg</span>
                <div class="actions">
                    <img class="download" src="/image/arrow-download.png" alt="download">
                    <img class="trash" src="/image/vector-smart-trash.png" alt="delete">
                </div>
            </div>

            <div class="row upload-bilag">
                <button type="submit" class="btn btn-primary-outline"><img class="download"
                                                                           src="/image/vector-smart-arrow-up.png"
                                                                           alt="download">Upload bilag
                </button>
            </div>

        </div>


    </article>
</template>

<script>
    import myDatepicker from 'vue-datepicker';
    import vueSlider from 'vue-slider-component';
    export default {
//        Collect information to vue.data
        data()
        {
            return {
//                supervision registration section
                name_reg: '',
                surname_reg: '',
                email: '',
                password: '',
                address: '',
                postIndex: '',
                city: '',
                phone: '',
                special_evidence: '',
                special_trained: false,
                special_preparation: 'default',
                options: [
                    {text: 'Vælg specialistuddannelse', value: 'default'},
                    {text: 'Børnepsykologi', value: 'Børnepsykologi'},
                    {text: 'Sundhedspsykologi med børn', value: 'Sundhedspsykologi med børn'},
                    {text: 'Psykoterapi med børn', value: 'Psykoterapi med børn'},
                    {text: 'Klinisk børnepsykologi', value: 'Klinisk børnepsykologi'},
                    {text: 'Klinisk børneneuropsykologi', value: 'Klinisk børneneuropsykologi'},
                    {text: 'Pædagogisk psykologi', value: 'Pædagogisk psykologi'},
                    {text: 'Voksenpsykologi', value: 'Voksenpsykologi'},
                    {text: 'Sundhedspsykologi med voksne', value: 'Sundhedspsykologi med voksne'},
                    {text: 'Psykoterapi med voksne', value: 'Psykoterapi med voksne'},
                    {text: 'Psykopatologi', value: 'Psykopatologi'},
                    {text: 'Klinisk Neuropsykologi', value: ' Klinisk Neuropsykologi'},
                    {text: 'Gerontopsykolog', value: 'Gerontopsykolog'},
                    {text: 'Arbejds- og organisationspsykologi', value: 'Arbejds- og organisationspsykologi'},
                ],
//              END  supervision registration section

//slider section
                demo: {
                    default: {
                        width: 'auto',
                        height: 6,
                        value: 0,
                        direction: 'horizontal',
                        dotSize: 16,
                        eventType: 'auto',
                        min: 0,
                        max: 6,
                        interval: 0.5,
                        disabled: false,
                        show: true,
                        tooltip: 'always',
                        clickable: true,
                        tooltipDir: 'top',
                        piecewise: true,
                        lazy: false,
                        reverse: false,
                        speed: 1,
                        formatter: "{value}",
                        bgStyle: {
                            "backgroundImage": "url('../image/slider.png') left top no-repeat;"
                        },
                        sliderStyle: null,
                        tooltipStyle: {
                            "backgroundColor": "#666",
                            "borderColor": "#666",
                        },
                        processStyle: null,
                        piecewiseStyle: null
                    },
                },
//end slider section

//timer
                startTime: {
                    time: ''
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    placeholder: 'Dato',
                    inputStyle: {
                        'appearance': 'none',
                        'background': 'transparent url("/image/down-arrow.svg") no-repeat',
                        'background-position': 'calc(100% - 20px)',
                        'width': '100%',
                        'height': '42px',
                        'margin': '10px',
                        'border-radius': '5px',
                        'padding': '0 15px',
                        'font-family': 'Raleway',
                        'border': '1px solid #4ba3b6',
                        'color': '#4ba3b6',
                        'background-color': 'white',
                    },
                    color: {
                        header: '#3b7f8e',
                        headerText: '#000000'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                },
//timer section end

                findSupervisorInput: '',
                hideSelectGroupComposition: false,
                selectSupervisor: 'default',
                selectSupervisorOptions: [
                    {text: 'vælg supervisor', value: 'default'},
                    {text: 'Supervisor', value: 'Supervisor'},

                ],
                selectDate: 'default',
                selectDateOptions: [
                    {text: 'Dato', value: 'default'},
                    {text: 'Some Dato', value: 'Some Dato'},

                ],
                supervisionsType: 'default',
                supervisionsTypeOptions: [
                    {text: 'Supervisionstype', value: 'default'},
                    {text: 'Ansigt-til-ansigt', value: 'Ansigt-til-ansigt'},
                    {text: 'Live Video/Audio', value: 'Live Video/Audio'},
                ],
                groupComposition: 'default',
                groupCompositionOptions: [
                    {text: 'Gruppesammensætning', value: 'default'},
                    {text: '0 - 3', value: '0-3'},
                    {text: '9 - 12', value: '9-12'},
                    {text: 'Over 12', value: 'Over12'},
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
            createDataList(supervisors){
                $('#supervisor_list').empty();
                supervisors.forEach(function (item) {
                    $('#supervisor_list').append('<option>'+item+'</option>');
//                    console.log(item);
                });
            },
            findSupervisor(){
                var mainData = this;
                let querySearch = this.findSupervisorInput;
                let data = {'find':querySearch};
                axios.post('/findSupervisor', data)
                        .then(function (response) {
                            let supervisors = response.data;
                            var list = [];
                            supervisors.forEach(function (item ,i) {
                                list[i] = item.name +' '+ item.surname;
                            });
                            mainData.createDataList(list)
                        })
                        .catch(function (error) {
                           console.log(error);
                        });
            },

            addNewSupervisor(){
                let data = {
                    name: this.name_reg,
                    surname: this.surname_reg,
                    email: this.email,
                    address: this.address,
                    post: this.postIndex,
                    city: this.city,
                    phone: this.phone,
                    special_evidence: this.special_evidence,
                    special_trained: this.special_trained,
                    special_preparation: this.special_preparation,

                };
                axios.post('/psychologistRegSupervision', data)
                        .then(function (response) {
                            console.log(response);
                            swal('Godt arbejde!', 'Din profil opdateret!', 'success');
                        })
                        .catch(function (error) {
                            let listErrors = error.response.data;
                            var array = $.map(listErrors, function (value, index) {
                                return [value];
                            });
                            var responce_errors = "<ul class='text-left'>";
                            array.forEach(function (item, i, arr) {
                                responce_errors += "<li>" + item + "</li>";
                            });
                            responce_errors += "</ul>";
                            swal({
                                title: 'Fejl List',
                                type: 'error',
                                html: responce_errors,
                            });
                        });
            },
            showSupervisorCreate(){
                $('.popUpContainer').css('visibility', 'hidden');
                $('.wrapper-section-popUp').css('display', 'block');
            }
            ,

            showPopUp(){
                $('.popUp-Opret').css('display', 'block');
                $('.overlayMenu').fadeIn(200);
                $('.overlayMenu').css("display", "block");
                $('.overlayMenu').css("backgroundColor", 'rgba(0, 0, 0, 0.35)');
            }
            ,
            hideDropDown(){
                this.hideSelectGroupComposition = !this.hideSelectGroupComposition;
            },

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
            changeDropDownSelectSupervisor()
            {
                this.changeColorSelect($('#selectSupervisor'), $('#selectSupervisor').val());
            },
            changeDropDownSelectDate()
            {
                this.changeColorSelect($('#selectDate'), $('#selectDate').val());
            }
            ,
            changeDropDownSupervisionsType()
            {
                this.changeColorSelect($('#supervisionsType'), $('#supervisionsType').val());
            }
            ,
            changeDropDownGroupComposition()
            {
                this.changeColorSelect($('#groupComposition'), $('#groupComposition').val());
            }
            ,

            getError(field)
            {
                if (this.errors[field]) {
                    return this.errors[field][0];
                }
            }
            ,

        },
        components: {
            'date-picker': myDatepicker,
            vueSlider
        }
    }


</script>
