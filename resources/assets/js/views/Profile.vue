<template>
    <article class="content-block-profil">
        <h3>PROFIL ADMINISTRATION</h3>
        <hr>
        <div class="col-md-6">
            <form action="" @submit.prevent="saveProfile" @keydown="deleteErrors($event.target.name)">
                <div class="row">
                    <input type="text" name="name" class="application-input" v-model="name" placeholder="Navn">

                    <p class="form-error-show" v-text="getError('name')" v-if="hasError('name')"></p>
                </div>
                <div class="row">
                    <input type="text" name="surname" class="application-input" v-model="surname"
                           placeholder="Efternavn">

                    <p class="form-error-show" v-text="getError('surname')" v-if="hasError('surname')"></p>
                </div>
                <div class="row">
                    <input type="text" name="email" class="application-input" v-model="email" placeholder="Email">

                    <p class="form-error-show" v-text="getError('email')" v-if="hasError('email')"></p>
                </div>
                <div class="row">
                    <input type="password" name="password" class="application-input" v-model="password"
                           placeholder="Adgangskode">

                    <p class="form-error-show" v-text="getError('password')" v-if="hasError('password')"></p>
                </div>
                <div class="row select-dropdown">
                    <select class="application-select" id="application-select" v-model="special_preparation"
                            @change="changeDropDown">
                        <option  class="default-option" v-for="option in options" v-bind:value="option.value" :disabled="option.value==0">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="row wrap-input-address">
                    <div class="custom-block">
                        <input type="text" class="addresse-input" v-model="address" placeholder="Adresse">
                        <input type="text" class="postnr-input" v-model="postIndex" placeholder="Postnr.">
                        <input type="text" class="by-input" v-model="city" placeholder="By">
                    </div>
                </div>
                <div class="row">
                    <input type="text" class="application-input" v-model="phone" placeholder="Tlf.nr.">
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
                        <img id="user_avatar" class="user_avatar_placeholder" :src="user_avatar" alt="avatar">
                    </div>
                    <div class="flex-empty">some text</div>
                </div>
                <div class="action">
                    <div class="col-md-3 upload">
                        <form action="" class="fileUploadForm" @submit.prevent="updateAvatar"
                              @keydown="deleteErrors($event.target.name)">
                            <input type="file" @change="uploadUserAvatar" id="fileFieldUpload">
                        </form>
                        <span id="fileUpload" @click="uploadAvatar">
                        <img src="/image/vector-smart-arrow-up.png" alt="arrow">
                            Upload
                        </span>
                    </div>
                    <div class="col-md-6" text-center>
                        <div class="buttons-avatar" id="avatarButtons">
                            <button class="save-upload-avatar" id="vanilla-save">Save</button>
                            <button class="cancel-upload-avatar" id="vanilla-cancel">Cansel</button>
                        </div>
                    </div>
                    <div class="col-md-3 text-right">
                        <span id="fileDelete" @click="deleteAvatar">
                        <img src="/image/vector-smart-trash.png" alt="trash">
                            Fjern
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </article>

</template>

<script>
    export default {
//        Collect information to vue.data
        data()
    {
        return {
            name: '',
            surname: '',
            email: '',
            password: '',
            address: '',
            postIndex: '',
            city: '',
            phone: '',
            special_preparation: 'default',
            options: [
                {text: 'Vælg specialistuddannelse', value: 'default'},
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
                {text: '   * Klinisk Neuropsykologi', value: ' Klinisk Neuropsykologi'},
                {text: '   * Gerontopsykolog', value: 'Gerontopsykolog'},
                {text: 'Arbejds- og organisationspsykologi: ', value: 0},
                {text: '   * Arbejds- og organisationspsykologi', value: 'Arbejds- og organisationspsykologi'},
            ],
            user_avatar: '',
            user_role: '',
            errors: [],
        }
    }
    ,
    //        when component created get info about user
    created: function () {
        //Reference to global data
        let that = this;
        axios.get('/informationAboutUser')
                .then(function (response) {
                    that.name = response.data.name;
                    that.surname = response.data.surname;
                    that.email = response.data.email;
                    that.user_role = response.data.roles[0].name;
                    if (response.data.full_info_about_user != null) {
                        that.address = response.data.full_info_about_user.address;
                        that.postIndex = response.data.full_info_about_user.post;
                        that.city = response.data.full_info_about_user.city;
                        that.phone = response.data.full_info_about_user.phone;
                        that.special_preparation = response.data.full_info_about_user.special_preparation;
                        that.user_avatar = response.data.full_info_about_user.avatar_path != null ? response.data.full_info_about_user.avatar_path : '/image/avatar-placeholder.png';
                    } else {
                        that.user_avatar = '/image/avatar-placeholder.png';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
    ,
    methods: {
        //check user role
        hasRole(role)
        {
            return role == this.user_role;
        }
    ,
//            update user avatar
        uploadUserAvatar(event)
        {
            var mainData = this;
            var data = new FormData();
            data.append('image', event.target.files[0]);
            axios.post('/userImageUploadAvatar', data)
                    .then(function (res) {
                        mainData.user_avatar = res.data;
                        setTimeout(function () {
                            var buttonBox = $('#avatarButtons');
                            var saveButton = $('#vanilla-save');
                            var cancelButton = $('#vanilla-cancel');

                            function demoVanilla() {

                                var vanilla = new Croppie(document.getElementById('user_avatar'), {
                                    viewport: {
                                        width: 200,
                                        height: 200,
                                        type: 'circle'
                                    },
                                    boundary: {
                                        width: 300,
                                        height: 300
                                    },
                                    enableOrientation: false
                                });
                                vanilla.bind({
                                    url: res.data
//                                    orientation: 1
                                });
                                buttonBox.css('display', 'block');
                                saveButton.on('click', function () {
                                    try {
                                        vanilla.result('blob').then(function (blob) {
                                            var dataBlob = new FormData();
                                            dataBlob.append('image', blob);
                                            axios.post('/userImageUploadAvatar', dataBlob)
                                                    .then(function (response) {
                                                        vanilla.destroy();
                                                        mainData.user_avatar = response.data;
                                                        buttonBox.css('display', 'none');
                                                        swal('Godt arbejde!', 'Avatar uploadet!', 'success');
                                                    })
                                        });
                                    }
                                    catch (e) {
                                        console.log(e);
                                    }
                                });
                                cancelButton.on('click', function () {
                                    try {
                                        vanilla.destroy();
                                        buttonBox.css('display', 'none');
                                    }
                                    catch (e) {
                                        console.log(e);
                                    }
                                });
                            }

                            demoVanilla();
                        }, 1000);
                    })
                    .catch(function (err) {
                        console.error(err);
                        swal('Fejl', 'ikke belastning avatar!', 'error');
                    });
        }
    ,
//            delete user avatar
        deleteAvatar()
        {
            let that = this;
            swal({
                title: 'Er du sikker?',
                text: "Du vil ikke være i stand til at vende tilbage denne!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ja, slet det!',
                cancelButtonText: 'Nej, annullere!',
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function () {
                axios.post('/deleteUserAvatar')
                        .then(function (response) {
                            that.user_avatar = '/image/avatar-placeholder.png';
                            swal('Godt arbejde!', 'Avatar fjernet!', 'success');
                        })
                        .catch(function (error) {
                            that.errors = error.response.data;
                        });

            }, function (dismiss) {
                if (dismiss === 'cancel') {
                    swal(
                            'Aflyst',
                            'Din avatar ikke slettet!',
                            'error'
                    )
                }
            })


        }
    ,

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
        changeDropDown()
        {
            var select = $('#application-select');
            var selectedValue = select.val();
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
        }
    ,

        getError(field)
        {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }
    ,
        saveProfile()
        {
            let that = this;

            let data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                address: this.address,
                post: this.postIndex,
                city: this.city,
                phone: this.phone,
                special_preparation: this.special_preparation,

            };
            if (this.password.length > 0) {
                data.password = this.password;
            }

            axios.post('/updateInformationUser', data)
                    .then(function (response) {
                        swal('Godt arbejde!', 'Din profil opdateret!', 'success');
                    })
                    .catch(function (error) {
                        that.errors = error.response.data;
                    });
        }
    ,
        uploadAvatar()
        {
            $('#fileFieldUpload').click();
        }
    }
    }


</script>
