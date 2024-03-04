import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { SidebarComponent } from 'src/shared/sidebar/sidebar.component';
import { DirectionfinanciereComponent } from './components/directionfinanciere/directionfinanciere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AdddirectorComponent } from './components/adddirector/adddirector.component';
import { UpdatedirectorComponent } from './components/updatedirector/updatedirector.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowdirectorComponent } from './components/showdirector/showdirector.component';
import { AddmessageComponent } from './components/addmessage/addmessage.component';
import { GetMessagesBySenderComponent } from './components/get-messages-by-sender/get-messages-by-sender.component';
import { GetMessagesByResciverComponent } from './components/get-messages-by-resciver/get-messages-by-resciver.component';
import { CommandShowComponent } from './components/command-show/command-show.component';
import { CommandAddComponent } from './components/command-add/command-add.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ShowForAdminComponent } from './components/show-for-admin/show-for-admin.component';
import { ShowCommandProuditComponent } from './components/show-command-proudit/show-command-proudit.component';
import { AddCommandProuditComponent } from './components/add-command-proudit/add-command-proudit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DirectionfinanciereComponent,
    AdddirectorComponent,
    UpdatedirectorComponent,
    ShowdirectorComponent,
    AddmessageComponent,
    GetMessagesBySenderComponent,
    GetMessagesByResciverComponent,
    CommandShowComponent,
    CommandAddComponent,
    ShowForAdminComponent,
    ShowCommandProuditComponent,
    AddCommandProuditComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
