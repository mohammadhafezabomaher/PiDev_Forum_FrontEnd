import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-affichetude',
  templateUrl: './affichetude.component.html',
  styleUrls: ['./affichetude.component.css']
})
export class AffichetudeComponent implements OnInit {
  searchForm: FormGroup;
  ListOfEtudiant!: Etudiant[];
  filteredEtudiants!: Etudiant[];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  constructor(private httpService: EtudiantService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      identifiant: ['']
    });
  }

  ngOnInit(): void {
    this.loadEtudiant();
  }

  loadEtudiant(): void {
    this.httpService.getAllEtudiants().subscribe(etudiants => {
      this.ListOfEtudiant = etudiants;
      this.applySearchFilter();
    });
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  delete(id: number): void {
    this.httpService.deleteEtudiant(id).subscribe(() => {
      this.loadEtudiant();
    });
  }

  applySearchFilter(): void {
    const identifiant = this.searchForm.value.identifiant.toLowerCase();
    if (identifiant) {
      this.httpService.searchEtudiantsByIdentifiant(identifiant).subscribe(
        filteredEtudiants => {
          this.filteredEtudiants = filteredEtudiants;
          this.totalItems = this.filteredEtudiants.length;
        },
        error => {
          console.error("Error fetching etudiants by identifiant:", error);
        }
      );
    } else {
      this.filteredEtudiants = this.ListOfEtudiant;
      this.totalItems = this.ListOfEtudiant.length;
    }
  }
}
