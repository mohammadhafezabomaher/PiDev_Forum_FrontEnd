import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnseignantComponent} from './components/enseignants/enseignant.component';
import { EnseignantsDashboardComponent } from './components/enseignantsdashboard/enseignantsdashboard.component';
//import {EnseignantComponent} from './components/enseignantsdahboard/enseignantdashboard.component';


const routes: Routes = [
  {
  path: 'enseignant', component: EnseignantComponent
  },
  {
    path: 'dashboardenseignant', component: EnseignantsDashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
