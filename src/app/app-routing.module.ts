import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutVoitureComponent } from './Voiture/ajout-voiture/ajout-voiture.component';
import { DashboardComponent } from './Voiture/dashboard/dashboard.component';
import { ListeParkingsComponent } from './parking/liste-parkings/liste-parkings.component';
import { LoginComponent } from './authentification/login/login.component';
import { SiginComponent } from './authentification/sigin/sigin.component';
import { UpdateVoitureComponent } from './Voiture/update-voiture/update-voiture.component';
import { AjoutParkingComponent } from './parking/ajout-parking/ajout-parking.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
{path:'',redirectTo:'Login',
pathMatch:'full'},
{path:'Login',
component:LoginComponent},
{path:'Sigin',
component:SiginComponent},
{path:'Dashboard',
component:DashboardComponent},

{path:'Acceuil',
component:AccueilComponent},

{path:'Ajoutvoiture',
component:AjoutVoitureComponent},

{path:'Updatevoiture/:id',
component:UpdateVoitureComponent},

{path:'ListeParkings',
component:ListeParkingsComponent},
{path:'AjoutParking',
component:AjoutVoitureComponent},
{path:'Ajoutparking',
component:AjoutParkingComponent},
{path:'details/:id',
component:DetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
