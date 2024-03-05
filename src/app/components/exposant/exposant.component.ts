import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Exposant } from 'src/app/models/Exposant';
import { ExposantService } from 'src/app/services/exposant.service';
import { UpdateexposantComponent } from '../updateexposant/updateexposant.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'; // Importer le composant de dialogue de confirmation
import { MatSnackBar, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';




@Component({
  selector: 'app-exposant',
  templateUrl: './exposant.component.html',
  styleUrls: ['./exposant.component.css']
})
export class ExposantComponent implements OnInit {
  searchTitle: string = '';
  searchResults: any[] = [];
  titreSearch: string = '';
  submitted: boolean = false;
  showDeleteMessage: boolean = false; 
  currentPage: number = 1;
  itemsPerPage: number = 5; // Change this value based on your preference
  totalItems: number = 0;


  constructor(
    private httpService: ExposantService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {}

  ListOfExposants: Exposant[] = [];
  exposantForm!: FormGroup;
  show = false;
  filteredExposants: Exposant[] = [];
  

  ngOnInit(): void {
    this.httpService.retrieveAllExposants().subscribe(Exposant => {
      this.ListOfExposants = Exposant;
      this.filteredExposants = this.ListOfExposants; // Initialise filteredOffres avec toutes les offres au début
      this.totalItems = this.ListOfExposants.length;

    });
  
  }

  // Pagination methods
  getPages(): number[] {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
  DeleteExposant(idExposant: number) {
    this.openConfirmationDialog(idExposant); // Appeler la méthode pour ouvrir la boîte de dialogue de confirmation
  }
  openConfirmationDialog(idExposant: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '350px',
        data: "Voulez-vous vraiment supprimer cette offre?" // Passer le message de confirmation au composant de dialogue
    });
  
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.httpService.DeleteExposant(idExposant).subscribe(() => {
                this.ListOfExposants = this.ListOfExposants.filter(Exposant => Exposant.idExposant !== idExposant);
                this.filteredExposants = this.ListOfExposants;
                this.showSnackbar('Offre supprimée avec succès !');
            });
        } else {
            // Réalisez des actions supplémentaires si nécessaire lors de l'annulation de la suppression
        }
    });
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Fermer', {
        duration: 3000, // Durée d'affichage du message en millisecondes
        horizontalPosition: 'center', // Position horizontale au centre de la page
        verticalPosition: 'bottom' // Position verticale en bas de la page
    });
  }
  
  modify(exposant: Exposant) {
    const dialogRef = this.dialog.open(UpdateexposantComponent, {
      width: '500px',
      data: exposant // Passer les données de l'offre pour la modification
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchExposants();
      }
    });
  }
  fetchExposants() {
    this.httpService.retrieveAllExposants().subscribe(Exposant => {
      this.ListOfExposants = Exposant
      this.filteredExposants = this.ListOfExposants.filter(Exposant =>
        Exposant.siteOfficiel.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    });
  }
 

  searchOffres(): void {
    // Filtrer les offres par titre
    this.filteredExposants = this.ListOfExposants.filter(Exposant =>
      Exposant.siteOfficiel.toLowerCase().includes(this.searchTitle.toLowerCase())
    );
  }

  onSearchChange(): void {
    this.searchOffres();
  }

  
}



