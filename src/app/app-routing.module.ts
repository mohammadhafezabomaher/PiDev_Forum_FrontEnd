import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionfinanciereComponent } from './components/directionfinanciere/directionfinanciere.component';
import { AddmessageComponent } from './components/addmessage/addmessage.component';
import { GetMessagesByResciverComponent } from './components/get-messages-by-resciver/get-messages-by-resciver.component';
import { GetMessagesBySenderComponent } from './components/get-messages-by-sender/get-messages-by-sender.component';
import { CommandAddComponent } from './components/command-add/command-add.component';
import { ShowForAdminComponent } from './components/show-for-admin/show-for-admin.component';
import { ShowCommandProuditComponent } from './components/show-command-proudit/show-command-proudit.component';
import { AddCommandProuditComponent } from './components/add-command-proudit/add-command-proudit.component';

const routes: Routes = [{path:'Directionfinanciere', component:DirectionfinanciereComponent },
{path:'add', component:AddmessageComponent },
{path:'receivemessages',component:GetMessagesByResciverComponent},
{path:'sendermesssages',component:GetMessagesBySenderComponent},
{path:'addcommand',component:CommandAddComponent},
{path:'commands',component:ShowForAdminComponent},
{path:'CommandsProudits',component:ShowCommandProuditComponent},
{path:'addCommandsProudits',component:AddCommandProuditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
