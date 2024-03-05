import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { TypeEtudiant } from 'src/app/models/TypeEtudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
 
  etudiants: any[] = [];
  @ViewChild('pieChart', { static: false }) pieChart!: ElementRef;

  // Store the chart instance
  private myPieChart: Chart<'pie', number[], string> | undefined;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.fetchEtudiants();
  }

  fetchEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe(data => {
      this.etudiants = data;
      this.updatePieChart(); // Call updatePieChart after data is fetched
    });
  }

  updatePieChart() {
    const etudiantCount = this.etudiants.filter(e => e.typeEtudiant === TypeEtudiant.Etudiant).length;
    const alumniCount = this.etudiants.filter(e => e.typeEtudiant === TypeEtudiant.Alumni).length;
  
    const ctx = this.pieChart.nativeElement.getContext('2d');
  
    // Destroy existing chart if it exists
    if (this.myPieChart) {
      this.myPieChart.destroy();
    }
  
    // Create a new chart with actual data
    this.myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Etudiant', 'Alumni'],
        datasets: [{
          data: [etudiantCount, alumniCount],
          backgroundColor: [
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 99, 132, 0.7)'
          ],
          borderWidth: 1
        }]
      }
    });
  }
}
