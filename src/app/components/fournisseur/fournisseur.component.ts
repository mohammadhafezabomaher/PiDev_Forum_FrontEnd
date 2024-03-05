import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpFournisseurService } from 'src/app/services/http-fournisseur.service';
import Chart from 'chart.js/auto';
import { Fournisseur } from 'src/app/models/fournisseur.model';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit,AfterViewInit {
  createForm!: FormGroup;
  imageUrl: string = 'assets/img/logo.jpg';

  constructor(private httpF: HttpFournisseurService, private fb: FormBuilder) { }

  listOfFournisseur!: Fournisseur[];
  fournisseurStatistics: { type: string, count: number }[] = [];
  types: string[] = [];
  ngOnInit(): void  {
    this.fetchFournisseurs();
    this.calculateOffreStatistics();
    
    this.createForm = this.fb.group({
      typeFournisseur: ['', Validators.required],
       
    });
    
  }

   fetchFournisseurs() {
    this.httpF.fetchAll().subscribe(fournisseur => {
      this.listOfFournisseur = fournisseur;
      this.calculateOffreStatistics();
      this.drawChart();
    });
  }
  handelSubmit() {
    this.fetchFournisseurs();
  } 

  delete(id: number) {
    this.httpF.delete(id).subscribe(() => {     
      this.fetchFournisseurs();
    });
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.drawChart();
    }, 100); // Changer le délai en fonction de votre besoin
  }
  

  drawChart(): void {
    const ctx = document.getElementById('fournisseurChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.fournisseurStatistics.map(stat => stat.type),
        datasets: [{
          label: 'Nombre d\'offres',
          data: this.fournisseurStatistics.map(stat => stat.count),
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
    this.fournisseurStatistics = [];
    this.types = [...new Set(this.listOfFournisseur.map(fournisseur => fournisseur.typeFournisseur.toString()))];

    // Boucle à travers tous les types d'offres uniques
    this.types.forEach(type => {
      // Compter le nombre d'offres pour chaque type
      const count = this.listOfFournisseur.filter(fournisseur => fournisseur.typeFournisseur.toString() === type).length;

      // Ajouter les statistiques pour ce type
      this.fournisseurStatistics.push({ type, count });
    });
  }


     
}
