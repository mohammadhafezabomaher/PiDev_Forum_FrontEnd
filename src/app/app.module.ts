import { NgModule, Component } from '@angular/core';
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
import { ProduitComponent } from './components/produit/produit.component';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ModifyProductModalComponent } from './components/modify-product-modal/modify-product-modal.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { CreateFournisseurComponent } from './components/create-fournisseur/create-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DirectionfinanciereComponent,
    ProduitComponent,
    AddProductModalComponent,
    ModifyProductModalComponent,
    FournisseurComponent,
    CreateFournisseurComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
