import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/enseignant.model';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-enseignant-dashboard',
  templateUrl: './enseignantsdashboard.component.html',
  styleUrls: ['./enseignantsdashboard.component.css']
})
export class EnseignantsDashboardComponent implements OnInit {
  enseignants: Enseignant[] = [];

  constructor(private enseignantService: EnseignantService) { }

  ngOnInit(): void {
    this.fetchEnseignants();
  }

  fetchEnseignants(): void {
    this.enseignantService.getEnseignants().subscribe(
      (enseignants: Enseignant[]) => {
        this.enseignants = enseignants;
      },
      (error: any) => {
        console.error('Failed to fetch enseignants:', error);
      }
    );
  }
}
