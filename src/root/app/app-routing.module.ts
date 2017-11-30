import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './../components/home/home/home.component';
import { ProfileComponent } from './../components/profile/profile/profile.component';
import { WelcomeComponent } from './../components/auth/welcome/welcome.component';
import { AuthGuard } from './../components/auth/auth.guard';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'profile', component: ProfileComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [ RouterModule ],
    providers: [
        AuthGuard
	]
})
export class AppRoutingModule {}