import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackComponent } from './components/Pack/pack/pack.component';
import { AdminComponent } from './components/admin/admin.component';
import { ForumComponent } from './components/Forum/forum/forum.component';

const routes: Routes = [
  {path:"pack",component:PackComponent},
  {path:"forum",component:ForumComponent},
  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
