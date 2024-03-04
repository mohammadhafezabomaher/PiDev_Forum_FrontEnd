import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { SidebarComponent } from 'src/shared/sidebar/sidebar.component';
import { DirectionfinanciereComponent } from './components/directionfinanciere/directionfinanciere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { ViewaddminComponent } from './components/viewaddmin/viewaddmin.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { EditadminComponent } from './components/editadmin/editadmin.component';
import { PackComponent } from './components/Pack/pack/pack.component';
import { AddpackComponent } from './components/Pack/addpack/addpack.component';
import { EditpackComponent } from './components/Pack/editpack/editpack.component';
import { ForumComponent } from './components/Forum/forum/forum.component';
import { AjouterforumComponent } from './components/Forum/ajouterforum/ajouterforum.component';
import { ViewforumComponent } from './components/Forum/viewforum/viewforum.component';
import { EditforumComponent } from './components/Forum/editforum/editforum.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForumfrontComponent } from './components/ForumFront/forumfront/forumfront.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DirectionfinanciereComponent,
    AdminComponent,
    AddadminComponent,
    ViewaddminComponent,
    EditadminComponent,
    PackComponent,
    AddpackComponent,
    EditpackComponent,
    ForumComponent,
    AjouterforumComponent,
    ViewforumComponent,
    EditforumComponent,
    DashboardComponent,
    ForumfrontComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
