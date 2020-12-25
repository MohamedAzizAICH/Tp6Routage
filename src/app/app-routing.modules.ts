import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './composants/accueil/accueil.component';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';
import { ContactComponent } from './composants/contact/contact.component';
import { Error404Component } from './composants/error404/error404.component';


const appRoutes: Routes =[
    {path:'accueil', component:AccueilComponent},
    {path:'listmateriel', component:ListmaterielComponent},
    {path:'contact', component:ContactComponent},
    {path:'**', component:Error404Component},
    {path:'', redirectTo:'accueil', pathMatch:'full'}    
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
