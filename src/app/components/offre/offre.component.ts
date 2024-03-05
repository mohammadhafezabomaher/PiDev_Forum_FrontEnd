import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Offre } from 'src/app/models/offre';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AddComponent } from '../add/add.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Chart from 'chart.js/auto';
import { FatmaService } from 'src/app/services/fatma.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit, AfterViewInit {
  searchTitle: string = '';
  searchResults: any[] = [];
  titreSearch: string = '';
  submitted: boolean = false;
  showDeleteMessage: boolean = false;
  deleteMessage: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 4; // Change this value based on your preference
  totalItems: number = 0;

  constructor(
    private httpService: FatmaService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {}

  ListOfOffres: Offre[] = [];
  offreForm!: FormGroup;
  show = false;
  filteredOffres: Offre[] = [];
  types: string[] = [];
  selectedType: string = ''; // Définir la propriété selectedType
  offreStatistics: { type: string, count: number }[] = [];
  ngOnInit(): void {
    this.httpService.retrieveAllOffres().subscribe(Offre => {
      this.ListOfOffres = Offre;
      this.filteredOffres = this.ListOfOffres; // Initialise filteredOffres avec toutes les offres au début
      this.types = [...new Set(this.ListOfOffres.map(offre => offre.typeOffre.toString()))];
      this.calculateOffreStatistics();
    });

    this.offreForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      typeOffre: ['', Validators.required]
    });
  }
  getPackPhototUrl(offre: Offre): string {
    return this.httpService.getPhoto(offre.imageUrl);  
  }

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file, file.name);
  
    // Envoi de l'image au serveur
    this.httpService.uploadImage(formData).subscribe(imageUrl => {
      this.offreForm.patchValue({ imageUrl });
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.drawChart();
    }, 100); // Changer le délai en fonction de votre besoin
  }
  

  drawChart(): void {
    const ctx = document.getElementById('offreChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.offreStatistics.map(stat => stat.type),
        datasets: [{
          label: 'Nombre d\'offres',
          data: this.offreStatistics.map(stat => stat.count),
          backgroundColor: [
            '#ffcc00',
            '#33cc33',
            '#ff9900',
            '#0099cc'
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'right'
          }
        },
        animation: {
          animateRotate: true, // Activer l'animation de rotation
          animateScale: true // Activer l'animation de mise à l'échelle
        }
      }
    });
  }
  
  calculateOffreStatistics(): void {
    // Réinitialisation des statistiques
    this.offreStatistics = [];

    // Boucle à travers tous les types d'offres uniques
    this.types.forEach(type => {
      // Compter le nombre d'offres pour chaque type
      const count = this.ListOfOffres.filter(offre => offre.typeOffre.toString() === type).length;

      // Ajouter les statistiques pour ce type
      this.offreStatistics.push({ type, count });
    });
  }

  handelSubmit() {
    this.httpService.addOffre(this.offreForm.value).subscribe(newOffre => {
      this.ListOfOffres.push(newOffre);
      this.filteredOffres = this.ListOfOffres; // Met à jour filteredOffres après l'ajout de la nouvelle offre
      this.show = false;
      this.offreForm.reset();
      this.submitted = true;
    });
  }

  filterByType(type: string) {
    if (type === "") {
      this.filteredOffres = this.ListOfOffres; // Afficher toutes les offres si aucun type n'est sélectionné
    } else {
      this.filteredOffres = this.ListOfOffres.filter(offre => offre.typeOffre.toString() === type);
    }
  }

  showaddOffre() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '500px',
      data: { showForm: true } // Passer la variable showForm avec la valeur true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchOffres(); // Mettre à jour la liste des offres si une nouvelle offre a été ajoutée avec succès
      }
    });
  }

  openConfirmationDialog(idOffre: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Voulez-vous vraiment supprimer cette offre?" // Passer le message de confirmation au composant de dialogue
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.httpService.DeleteOffre(idOffre).subscribe(() => {
          this.ListOfOffres = this.ListOfOffres.filter(offre => offre.idOffre !== idOffre);
          this.filteredOffres = this.ListOfOffres;
          this.showSnackbar('Offre supprimée avec succès !');
        });
      } else {
        // Réalisez des actions supplémentaires si nécessaire lors de l'annulation de la suppression
      }
    });
  }

  // Méthode pour afficher un snackbar
  showSnackbar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du message en millisecondes
      horizontalPosition: 'center', // Position horizontale au centre de la page
      verticalPosition: 'bottom' // Position verticale en bas de la page
    });
  }

  DeleteOffre(idOffre: number) {
    this.openConfirmationDialog(idOffre); // Appeler la méthode pour ouvrir la boîte de dialogue de confirmation
  }

  fetchOffres() {
    this.httpService.retrieveAllOffres().subscribe(offres => {
      this.ListOfOffres = offres
      this.totalItems = this.ListOfOffres.length;
      this.filteredOffres = this.ListOfOffres.filter(offre =>
        offre.titre.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    });
  }

  fetchOffres2(page: number) {
    // Update the current page before fetching data
    this.currentPage = page;

    // Call the HTTP service to fetch data for the new page
    this.httpService.fetchAll2(this.currentPage, this.itemsPerPage).subscribe(offres => {
      this.ListOfOffres = offres;
    });
  }

  modify(offre: Offre) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data: offre // Passer les données de l'offre pour la modification
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchOffres();
      }
    });
  }

  searchOffres(): void {
    // Filtrer les offres par titre
    this.filteredOffres = this.ListOfOffres.filter(offre =>
      offre.titre.toLowerCase().includes(this.searchTitle.toLowerCase())
    );
  }

  onSearchChange(): void {
    this.searchOffres();
  }
}
