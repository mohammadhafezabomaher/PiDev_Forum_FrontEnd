import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit.model';
import { HttpProduitService } from 'src/app/services/http-produit.service';
import { ShareddataService } from 'src/app/services/shareddata.service';
import { AddCommandProuditComponent } from '../add-command-proudit/add-command-proudit.component';

@Component({
  selector: 'app-show-priudit-directour',
  templateUrl: './show-priudit-directour.component.html',
  styleUrls: ['./show-priudit-directour.component.css']
})
export class ShowPriuditDirectourComponent {
  constructor(private httpP: HttpProduitService , private dialog: MatDialog,private dataService: ShareddataService) { }

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
  showAdmin(DirectionFinanciere:Produit):void{
    this.dataService.setData(DirectionFinanciere);

     this.dialog.open(AddCommandProuditComponent, {
       width: '800px',
       height:'600PX', 
     });
     }


}
