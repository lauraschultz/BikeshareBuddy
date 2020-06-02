import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}  from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { AppRoutingModule } from './app-routing.module';
import { ErrorCardComponent } from './error-card/error-card.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MapComponent,
    ErrorCardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase, 'bikeshare'),
    // AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
