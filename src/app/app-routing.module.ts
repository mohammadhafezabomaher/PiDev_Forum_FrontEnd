import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './components/offre/offre.component';
import { UpdateComponent } from './components/update/update.component'; // Importez le composant de mise à jour
import { AddComponent } from './components/add/add.component';
import { ExposantComponent } from './components/exposant/exposant.component';
import { CreateexposantComponent } from './components/createexposant/createexposant.component';


const routes: Routes = [
  { path: '', redirectTo: 'offre', pathMatch: 'full' },
  { path: 'offre', component: OffreComponent }, // Route pour afficher toutes les offres
  { path: 'update/:id', component: UpdateComponent },
  { path: 'add', component: AddComponent }, 
  { path: 'exposant', component: ExposantComponent },
  { path: 'create', component: CreateexposantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
