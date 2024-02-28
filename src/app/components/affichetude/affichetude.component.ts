import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-affichetude',
  templateUrl: './affichetude.component.html',
  styleUrls: ['./affichetude.component.css']
})
export class AffichetudeComponent implements OnInit {
  constructor(private httpService: EtudiantService, private fb: FormBuilder) { }
  ListOfEtudiant!:Etudiant[];

  currentPage: number = 1;
  itemsPerPage: number = 5; // Change this value based on your preference
  totalItems: number = 0;

  ngOnInit(): void {
    this.loadEtudiant();
    
  }
  loadEtudiant(): void {
    this.httpService.getAllEtudiants().subscribe(etudiant => {
      this.ListOfEtudiant = etudiant;
      this.totalItems = this.ListOfEtudiant.length;
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

}
