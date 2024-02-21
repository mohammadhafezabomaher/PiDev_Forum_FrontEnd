import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivupdateComponent } from './components/nivupdate/nivupdate.component';
import { NiveauComponent } from './components/niveau/niveau.component';

const routes: Routes = [
  {path:'niveauSpecialite', component: NiveauComponent},
  {path:'niveauSpecialite/update/:id', component: NivupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
