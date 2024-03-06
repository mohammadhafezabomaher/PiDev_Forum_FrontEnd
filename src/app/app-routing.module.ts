import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CreateFournisseurComponent } from './components/create-fournisseur/create-fournisseur.component';

const routes: Routes = [
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'create', component: CreateFournisseurComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
