<section class="avatar text-center">
    @php
        $informationAboutUser = \App\User::with('fullInfoAboutUser','roles')->find(\Auth::user()->id);
    @endphp
    @if(isset($informationAboutUser->fullInfoAboutUser->avatar_path))
        <img src="{{$informationAboutUser->fullInfoAboutUser->avatar_path}}" alt="avatar">
    @else
        <img src="/image/avatar-placeholder.png" alt="avatar">
    @endif
</section>
<section class="user-info text-center">
    <h3>{{Auth::user()->getFullName()}}</h3>
    <p>SPECIALISTUDDANNELSE I <strong>
            @if(isset($informationAboutUser->fullInfoAboutUser->special_preparation))
               {{$informationAboutUser->fullInfoAboutUser->special_preparation}}
            @else
                Vælg specialistuddannelse
            @endif
        </strong></p>
</section>
<section class="menu">
    <ul id="menu">
        <img class="triangle" src="/image/triangle.png" alt="triangle">
        <li>
            <router-link to="#">SUPERVISION</router-link>
            <ul id="supervisorUl">
                <li><router-link to="/findSupervisor">FIND SUPERVISOR</router-link></li>
                <li><router-link to="/registerSupervision">REGISTRER SUPERVISON</router-link></li>
                <li><router-link to="/oversigtSupervision">OVERSIGT SUPERVISION</router-link></li>
                <li><router-link to="/registreringer">SE/RET REGISTRERINGER</router-link></li>
            </ul>
        </li>
        <li>
            <router-link to="/">TEORIKURSER</router-link>
            <ul>
                <li><a href="#">FIND KURSUS</a></li>
                <li><a href="#">REGISTRER KURSUS</a></li>
                <li><a href="#">OVERSIGT KURSER</a></li>
                <li><a href="#">SE/RET REGISTRERINGER</a></li>
            </ul>
        </li>
        <li>
            <router-link to="/">PRAKSIS</router-link>
            <ul>
                <li><a href="#">PRAKSIS INFO</a></li>
                <li><a href="#"> &nbsp;</a></li>
                <li><a href="#"> &nbsp;</a></li>
                <li><a href="#"> &nbsp;</a></li>
            </ul>
        </li>
        <li>
            <router-link to="/profile">MIN PROFIL</router-link>
        </li>
    </ul>
</section>


