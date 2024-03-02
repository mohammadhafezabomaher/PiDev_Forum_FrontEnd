import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivupdateComponent } from './components/nivupdate/nivupdate.component';
import { NiveauComponent } from './components/niveau/niveau.component';
import { CreatetudiantComponent } from './components/createtudiant/createtudiant.component';
import { AffichetudeComponent } from './components/affichetude/affichetude.component';
import { EtupdateComponent } from './components/etupdate/etupdate.component';
import { StatComponent } from './components/stat/stat.component';

const routes: Routes = [
  {path:'niveauSpecialite', component: NiveauComponent},
  {path:'niveauSpecialite/update/:id', component: NivupdateComponent},
  {path:'etudiants/update/:id', component: EtupdateComponent},
  {path:'etudiants/add', component: CreatetudiantComponent},
  {path:'etudiants', component: AffichetudeComponent},
  {path:'stat', component: StatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
