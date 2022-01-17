import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login/login.component';
import { SiginComponent } from './authentification/sigin/sigin.component';
import { DashboardComponent } from './Voiture/dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutVoitureComponent } from './Voiture/ajout-voiture/ajout-voiture.component';
import { UpdateVoitureComponent } from './Voiture/update-voiture/update-voiture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeParkingsComponent } from './parking/liste-parkings/liste-parkings.component';
//angular material 
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AjoutParkingComponent } from './parking/ajout-parking/ajout-parking.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginComponent,
    DashboardComponent,
    AccueilComponent,
    AjoutVoitureComponent,
    UpdateVoitureComponent,
    ListeParkingsComponent,
    AjoutParkingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule
    

 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
