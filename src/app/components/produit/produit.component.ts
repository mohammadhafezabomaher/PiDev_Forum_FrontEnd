import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpProduitService } from 'src/app/services/http-produit.service';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';
import { ModifyProductModalComponent } from '../modify-product-modal/modify-product-modal.component';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  constructor(private httpP: HttpProduitService , private dialog: MatDialog) { }

  listOfProduits!: Produit[];
  //produitForm!: FormGroup;
  show = false;
  filteredProduits: Produit[] = [];
  searchLibelle: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 6;


  ngOnInit(): void {
    this.fetchProduits();
  }

  fetchProduits() {
    this.httpP.fetchAll().subscribe(produits => {
      this.listOfProduits = produits;
      
    });
  } 
  

  handelSubmit() {
    this.fetchProduits();
  } 

  showAddTodo() {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchProduits();
        
      }
    });
  }

  modify(produit: Produit) {
    const dialogRef = this.dialog.open(ModifyProductModalComponent, {
      width: '500px',
      data: produit // Pass the product data to the modify modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchProduits();
      }
    });
  }

  delete(id: number) {
    this.httpP.delete(id).subscribe(() => {     
      this.fetchProduits();
    });
  }

  searchProduitsByLibelle() {
    if (this.searchLibelle.trim() === '') {
      // If the search string is empty, fetch all products
      this.fetchProduits();
    } else {
      // Otherwise, perform the search by libelle
      this.httpP.searchProduitsByLibelle(this.searchLibelle).subscribe(produits => {
        this.listOfProduits = produits;
      });
    }
  }

  fetchProduits2(page: number) {
    // Update the current page before fetching data
    this.currentPage = page;
  
    // Call the HTTP service to fetch data for the new page
    this.httpP.fetchAll2(this.currentPage, this.itemsPerPage).subscribe(produits => {
      this.listOfProduits = produits;
    });
  }

  getPackPhototUrl(forum: Produit): string {
    console.log(forum.image)
    return this.httpP.getPhoto(forum.image);  
  }


}
