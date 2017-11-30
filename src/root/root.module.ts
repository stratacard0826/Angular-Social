
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocalStorageModule } from 'angular-2-local-storage';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { RootComponent } from './root.component';
import { AppModule } from './app/app.module';
import { AppRoutingModule } from './app/app-routing.module';

// import { ComponentsModule } from './components/components.module';

import { FirebaseService, MessageService, FeedService, PostService, SearchService } from './service';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'uStadium',
      storageType: 'localStorage'
    }),
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
      FirebaseService,
      MessageService,
      FeedService,
      PostService,
      SearchService,      
  ],
  bootstrap: [RootComponent]
})
export class RootModule { 
}
